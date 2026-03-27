export type RequestStatus =
  | "Pending"
  | "Accepted"
  | "In Progress"
  | "Completed"
  | "Cancelled";

export type AdminRequest = {
  id: string;
  type: "Delivery" | "Service";
  customer: string;
  status: RequestStatus;
  createdAt: string;
};

export type DeliveryFormData = {
  fullName: string;
  phone: string;
  email: string;
  requestType: string;
  businessName: string;
  itemsRequested: string;
  address: string;
  preferredTime: string;
  paymentMethod: string;
  instructions: string;
};

export type ServiceFormData = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  category: string;
  description: string;
  address: string;
  timeline: string;
  budget: string;
  referralSource: string;
  urgency: string;
};

export type RequestKind = "service" | "delivery";

export type ServiceRequestPayload = ServiceFormData & {
  kind: "service";
};

export type DeliveryRequestPayload = DeliveryFormData & {
  kind: "delivery";
  serviceLabel: string;
};

export type RequestSubmissionPayload =
  | ServiceRequestPayload
  | DeliveryRequestPayload;

export type RequestSubmissionResult = {
  requestId: string;
  service: string;
  type: RequestKind;
};
