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
  phone: string;
  email: string;
  category: string;
  description: string;
  address: string;
  preferredDateTime: string;
  urgency: string;
};