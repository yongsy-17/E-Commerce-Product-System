import { OrderItem } from "./Orderitem";
import { Product } from "../Product/Product";
import { DeliveryOption } from "../Deliver/DeliveryOption";
import { Order } from "./Order";

/**
 * Represents a shopping cart that holds items before placing an order.
 */
export class ShoppingCart {
  private items: OrderItem[] = [];
  private owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  /**
   * Adds a product to the cart.
   * @param product The product to add
   * @param quantity Number of units
   */
  addProduct(product: Product, quantity: number): void {
    const newItem = new OrderItem(this.items.length + 1, "STANDARD", quantity, product);
    this.items.push(newItem);
    console.log(`${quantity} x ${product.productName} added to ${this.owner}'s cart.`);
  }

  /**
   * Displays cart contents.
   */
  viewCart(): void {
    console.log(`${this.owner}'s Shopping Cart:`);
    this.items.forEach((item, index) => {
      const p = item.getProduct();
      console.log(
        `#${index + 1}: ${p.productName} | Qty: ${item.getQuantity()} | Unit: $${p.price.toFixed(2)}`
      );
    });
  }

  /**
   * Creates an Order and processes payment.
   * @param deliveryOption The selected delivery method
   */
  checkout(deliveryOption: DeliveryOption): Order {
    const order = new Order(1, this.items, "PAID", deliveryOption, this.owner);
    console.log(`Order placed by ${this.owner}. Payment status: ${order.getPaymentStatus()}`);
    return order;
  }
}
