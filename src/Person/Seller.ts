import { Order } from "../Shopping/Order";
import { OrderItem } from "../Shopping/Orderitem";

export class Seller {
  constructor(public id: number, public name: string) {}

  // Returns all orders that include at least one product from this seller
  getOrdersWithMyProducts(orders: Order[]): Order[] {
    return orders.filter(order =>
      order['orderItems'].some(
        (item: OrderItem) => item.getProduct().sellerId === this.id
      )
    );
  }
}