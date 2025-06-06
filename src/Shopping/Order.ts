import { OrderItem } from "./Orderitem";
import { DeliveryOption } from "../Deliver/DeliveryOption";
import { Invoice } from "../Payment/Invoice";

export class Order {
  private invoiceList: Invoice[] = [];

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

  addInvoice(invoice: Invoice): void {
    this.invoiceList.push(invoice);
  }

  getInvoices(): Invoice[] {
    return this.invoiceList;
  }

  // Cancel item by product ID
  cancelItem(productId: number): number {
    const index = this.items.findIndex(item => item.getProduct().id === productId);

    if (index === -1) {
      throw new Error("Product not found in the order.");
    }

    const item = this.items[index];
    const product = item.getProduct();
    const quantity = item.getQuantity();

    // Restore product stock
    product.stockQuantity += quantity;

    // Calculate refund
    const price = product.price;
    const discount = product.discount;
    const refundAmount = price * (1 - discount / 100) * quantity;

    // Remove the item from the order
    this.items.splice(index, 1);

    return refundAmount;
  }
}
