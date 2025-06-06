import { Person } from "./Person";
import { Order } from "../Shopping/Order";
export class User extends Person {
  private orders: Order[] = [];

  public addOrder(order: Order): void {
    this.orders.push(order);
  }

  public getOrders(): Order[] {
    return this.orders;
  }

  cancelItem(orderId: number, productId: number): string {
    const order = this.orders.find(o => o.getId() === orderId);

    if (!order) {
      return "Order not found.";
    }

    try {
      const refundAmount = order.cancelItem(productId);
      return `Item canceled successfully. Refund: $${refundAmount.toFixed(2)}. Updated order total: $${order.getTotalPrice().toFixed(2)}`;
    } catch (error: any) {
      return `Cancel failed: ${error.message}`;
    }
  }
}
