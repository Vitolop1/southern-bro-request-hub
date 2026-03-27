import nodemailer from "nodemailer";
import { leadershipTeam } from "@/lib/company-data";
import type {
  DeliveryRequestPayload,
  RequestSubmissionPayload,
  ServiceRequestPayload,
} from "@/types/requests";

const williamEmail =
  leadershipTeam.find((member) => member.slug === "william-soteria")?.contactEmail ??
  "Soteriawilliam9@gmail.com";

function readMailConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure =
    process.env.SMTP_SECURE === "true" || (!Number.isNaN(port) && port === 465);
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.REQUEST_NOTIFICATION_EMAIL ?? williamEmail;

  if (!host || !user || !pass || !from) {
    return null;
  }

  return {
    host,
    port,
    user,
    pass,
    secure,
    from,
    to,
  };
}

export function isRequestEmailConfigured() {
  return Boolean(readMailConfig());
}

function createTransporter() {
  const config = readMailConfig();

  if (!config) {
    throw new Error(
      "Email delivery is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM."
    );
  }

  return {
    transporter: nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
    }),
    from: config.from,
    to: config.to,
  };
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/New_York",
  }).format(date);
}

function renderSharedDetails(payload: RequestSubmissionPayload, submittedAt: string) {
  const sharedRows = [
    ["Request type", payload.kind === "delivery" ? "Delivery" : "Service"],
    ["Submitted at", submittedAt],
    ["Customer name", payload.fullName],
    ["Phone", payload.phone],
    ["Email", payload.email],
  ];

  if (payload.kind === "service") {
    const servicePayload = payload as ServiceRequestPayload;

    return {
      serviceLabel: servicePayload.category,
      rows: [
        ...sharedRows,
        ["Company", servicePayload.companyName || "Not provided"],
        ["Service", servicePayload.category],
        ["Description", servicePayload.description],
        ["Address", servicePayload.address || "Not provided"],
        ["Timeline", servicePayload.timeline || "Not provided"],
        ["Budget", servicePayload.budget || "Not provided"],
        ["Urgency", servicePayload.urgency],
        ["Referral source", servicePayload.referralSource || "Not provided"],
      ],
    };
  }

  const deliveryPayload = payload as DeliveryRequestPayload;

    return {
      serviceLabel: deliveryPayload.serviceLabel,
      rows: [
        ...sharedRows,
        ["Service", deliveryPayload.serviceLabel],
        ["Delivery option", deliveryPayload.requestType],
        ["Pickup location", deliveryPayload.businessName],
        ["Items requested", deliveryPayload.itemsRequested],
        ["Delivery address", deliveryPayload.address],
      ["Preferred time", deliveryPayload.preferredTime || "Not provided"],
      ["Payment method", deliveryPayload.paymentMethod],
      ["Instructions", deliveryPayload.instructions || "Not provided"],
    ],
  };
}

function buildTextBody(
  requestId: string,
  payload: RequestSubmissionPayload,
  submittedAt: string,
  serviceLabel: string,
  rows: string[][]
) {
  const intro =
    payload.kind === "delivery"
      ? `Hello William,\n\nA new Southern Bro delivery request has been submitted.`
      : `Hello William,\n\nA new Southern Bro service request has been submitted.`;

  return [
    intro,
    "",
    `Request ID: ${requestId}`,
    `Submitted at: ${submittedAt}`,
    `Service: ${serviceLabel}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
}

function buildHtmlBody(
  requestId: string,
  payload: RequestSubmissionPayload,
  submittedAt: string,
  serviceLabel: string,
  rows: string[][]
) {
  const escapeHtml = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const intro =
    payload.kind === "delivery"
      ? "A new Southern Bro delivery request has been submitted."
      : "A new Southern Bro service request has been submitted.";

  return `
    <div style="font-family: Arial, sans-serif; color: #101828; line-height: 1.6;">
      <p>Hello William,</p>
      <p>${intro}</p>
      <p>
        <strong>Request ID:</strong> ${requestId}<br />
        <strong>Submitted at:</strong> ${submittedAt}<br />
        <strong>Service:</strong> ${serviceLabel}
      </p>
      <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; border: 1px solid #e4e7ec; background: #f8fafc; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                  <td style="padding: 10px 12px; border: 1px solid #e4e7ec;">${escapeHtml(value)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

export async function sendRequestNotification(
  requestId: string,
  payload: RequestSubmissionPayload
) {
  const { transporter, from, to } = createTransporter();
  const submittedAt = formatSubmittedAt(new Date());
  const { serviceLabel, rows } = renderSharedDetails(payload, submittedAt);

  const subject =
    payload.kind === "delivery"
      ? `New delivery request: ${serviceLabel} (${requestId})`
      : `New service request: ${serviceLabel} (${requestId})`;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject,
    text: buildTextBody(requestId, payload, submittedAt, serviceLabel, rows),
    html: buildHtmlBody(requestId, payload, submittedAt, serviceLabel, rows),
  });

  return {
    requestId,
    service: serviceLabel,
    type: payload.kind,
  };
}
