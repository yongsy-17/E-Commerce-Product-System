import { DeliveryStatus, DeliveryType } from "./DeliveryType";

export class Delivery {
  private deliveryId: string;
  private productId: string;
  private customerId: string;
  private status: DeliveryStatus;

  constructor(deliveryId: string, productId: string, customerId: string, status: DeliveryStatus) {
    if (!deliveryId || !productId || !customerId) {
      throw new Error("Delivery ID, Product ID, and Customer ID must not be empty");
    }
    this.deliveryId = deliveryId;
    this.productId = productId;
    this.customerId = customerId;
    this.status = status;
  }

  // Getter methods
  getDeliveryId(): string {
    return this.deliveryId;
  }

  getProductId(): string {
    return this.productId;
  }

  getCustomerId(): string {
    return this.customerId;
  }

  isDelivered(): boolean {
    return this.status === DeliveryStatus.DELIVERED;
  }
}