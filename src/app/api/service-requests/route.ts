import { NextResponse } from "next/server";
import { z } from "zod";
import { isRequestEmailConfigured, sendRequestNotification } from "@/lib/request-notifications";
import type { RequestSubmissionPayload } from "@/types/requests";

const serviceSchema = z.object({
  kind: z.literal("service"),
  fullName: z.string().trim().min(1),
  companyName: z.string().trim().optional().default(""),
  phone: z.string().trim().min(1),
  email: z.string().trim().email(),
  category: z.string().trim().min(1),
  description: z.string().trim().min(1),
  address: z.string().trim().optional().default(""),
  timeline: z.string().trim().optional().default(""),
  budget: z.string().trim().optional().default(""),
  referralSource: z.string().trim().optional().default(""),
  urgency: z.string().trim().min(1),
});

const deliverySchema = z.object({
  kind: z.literal("delivery"),
  fullName: z.string().trim().min(1),
  phone: z.string().trim().min(1),
  email: z.string().trim().email(),
  requestType: z.string().trim().min(1),
  businessName: z.string().trim().min(1),
  itemsRequested: z.string().trim().min(1),
  address: z.string().trim().min(1),
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

export async function POST(request: Request) {
  if (!isRequestEmailConfigured()) {
    return NextResponse.json(
      {
        error:
          "Email sending is not configured yet. Add the SMTP settings before using the request forms in production.",
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

  try {
    const result = await sendRequestNotification(createRequestId(payload.kind), payload);
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
