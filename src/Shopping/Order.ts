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
  cancelOrderItem(itemId: number): number | null {
    const itemIndex = this.items.findIndex(item => {
      return (item as any).id === itemId;
    }); 
    if (itemIndex !== -1) {
      const canceledItem = this.items[itemIndex];
      this.items.splice(itemIndex, 1); 
      return canceledItem.getTotalPrice(); 
    }
    
    return null; 
  }
  getOriginalTotal(): number {
  // Calculate the original total price before any cancellations or discounts
  let total = 0;
  for (const item of this.items) {
    const product = item.getProduct();
    const price = product.price;
    const quantity = item.getQuantity();
    const discount = product.discount;
    const discountedPrice = price * (1 - discount / 100);
    total += discountedPrice * quantity;
  }
  total += this.deliveryOption.cost;
  return total;
}
}
  


