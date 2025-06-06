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

  // Get all invoices
  getInvoices(): Invoice[] {
    return this.invoiceList;
  }

}
