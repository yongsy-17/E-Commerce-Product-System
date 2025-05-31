import { OrderItem } from "./Orderitem";
import { DeliveryOption } from "../Deliver/DeliveryOption";

export class Order {
  private id: number;
  private orderItems: OrderItem[];
  private paymentStatus: string;
  private deliveryOption: DeliveryOption;

  constructor(
    id: number,
    orderItems: OrderItem[],
    paymentStatus: string,
    deliveryOption: DeliveryOption
  ) {
    this.id = id;
    this.orderItems = orderItems;
    this.paymentStatus = paymentStatus;
    this.deliveryOption = deliveryOption;
  }

  getTotalPrice(): number {
    const itemsTotal = this.orderItems.reduce((total, item) => total + item.getTotalPrice(), 0);
    return itemsTotal + this.deliveryOption.cost;
  }
}
