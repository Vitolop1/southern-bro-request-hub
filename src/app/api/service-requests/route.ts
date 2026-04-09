import { NextResponse } from "next/server";
import { z } from "zod";
import { isRequestEmailConfigured, sendRequestNotification } from "@/lib/request-notifications";
import type { RequestSubmissionPayload } from "@/types/requests";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

const serviceSchema = z.object({
  kind: z.literal("service"),
  fullName: z.string().trim().min(2),
  companyName: z.string().trim().optional().default(""),
  phone: z.string().trim().min(7),
  email: z.string().trim().email(),
  website: z.string().trim().optional().default(""),
  category: z.string().trim().min(1),
  description: z.string().trim().min(10),
  address: z.string().trim().optional().default(""),
  timeline: z.string().trim().optional().default(""),
  budget: z.string().trim().optional().default(""),
  referralSource: z.string().trim().optional().default(""),
  urgency: z.string().trim().min(1),
});

const deliverySchema = z.object({
  kind: z.literal("delivery"),
  fullName: z.string().trim().min(2),
  phone: z.string().trim().min(7),
  email: z.string().trim().email(),
  website: z.string().trim().optional().default(""),
  requestType: z.string().trim().min(1),
  businessName: z.string().trim().min(2),
  itemsRequested: z.string().trim().min(2),
  address: z.string().trim().min(5),
  preferredTime: z.string().trim().optional().default(""),
  paymentMethod: z.string().trim().min(1),
  instructions: z.string().trim().optional().default(""),
  serviceLabel: z.string().trim().min(1),
});

const requestSchema = z.discriminatedUnion("kind", [serviceSchema, deliverySchema]);

function createRequestId(kind: RequestSubmissionPayload["kind"]) {
  const prefix = kind === "delivery" ? "DEL" : "SBE";
  const stamp = Date.now().toString().slice(-6);
  return `${prefix}-${stamp}`;
}

function getSubmissionSummary(requestId: string, payload: RequestSubmissionPayload) {
  return {
    requestId,
    service: payload.kind === "delivery" ? payload.serviceLabel : payload.category,
    type: payload.kind,
  };
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    return originUrl.host === requestUrl.host;
  } catch {
    return false;
  }
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

function isRateLimited(identifier: string) {
  const now = Date.now();

  for (const [key, bucket] of rateLimitBuckets.entries()) {
    if (bucket.resetAt <= now) {
      rateLimitBuckets.delete(key);
    }
  }

  const currentBucket = rateLimitBuckets.get(identifier);

  if (!currentBucket || currentBucket.resetAt <= now) {
    rateLimitBuckets.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (currentBucket.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  currentBucket.count += 1;
  rateLimitBuckets.set(identifier, currentBucket);
  return false;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { error: "This request could not be accepted." },
      { status: 403 }
    );
  }

  if (isRateLimited(getClientIdentifier(request))) {
    return NextResponse.json(
      {
        error:
          "Too many request attempts were made from this connection. Please wait a few minutes and try again.",
      },
      { status: 429 }
    );
  }

  if (!isRequestEmailConfigured()) {
    return NextResponse.json(
      {
        error:
          "Request intake is temporarily unavailable. Please contact the team directly by phone or email while this form is being finalized.",
      },
      { status: 503 }
    );
  }

  let payload: RequestSubmissionPayload;

  try {
    const json = await request.json();
    payload = requestSchema.parse(json) as RequestSubmissionPayload;
  } catch {
    return NextResponse.json(
      { error: "The request details were incomplete or invalid." },
      { status: 400 }
    );
  }

  const requestId = createRequestId(payload.kind);

  if ("website" in payload && payload.website.trim().length > 0) {
    return NextResponse.json(getSubmissionSummary(requestId, payload), { status: 200 });
  }

  try {
    const result = await sendRequestNotification(requestId, payload);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Failed to send request notification", error);
    return NextResponse.json(
      {
        error:
          "The request could not be emailed right now. Please try again after the mail settings are checked.",
      },
      { status: 500 }
    );
  }
}
