import { OrderItem } from "./Orderitem";
import { DeliveryOption } from "../Deliver/DeliveryOption";

export class Order {
  constructor(
    private id: number,
    private items: OrderItem[],
    private paymentStatus: string,
    private deliveryOption: DeliveryOption,
    private buyerName: string
  ) {}

  getTotalPrice(): number {
    const itemsTotal = this.items.reduce(
      (total, item) => total + item.getTotalPrice(),
      0
    );
    return itemsTotal + this.deliveryOption.cost;
  }

  getId(): number {
    return this.id;
  }

  getOrderItems(): OrderItem[] {
    return this.items;
  }

  getBuyerName(): string {
    return this.buyerName;
  }
  getPaymentStatus(): string {
    return this.paymentStatus;
  }
  getDeliveryOption(): DeliveryOption {
    return this.deliveryOption;
  }
}
