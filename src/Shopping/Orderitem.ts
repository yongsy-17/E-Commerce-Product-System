import { Product } from "../Product/Product";

export class OrderItem {
  private quantity: number;
  private deliveryOpt: string;
  private shipmentId: number;
  private product: Product;

  constructor(
    quantity: number,
    deliveryOpt: string,
    shipmentId: number,
    product: Product
  ) {
    this.quantity = quantity;
    this.deliveryOpt = deliveryOpt;
    this.shipmentId = shipmentId;
    this.product = product;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getProduct(): Product {
    return this.product;
  }

  getTotalPrice(): number {
    const discountedPrice = this.product.price * (1 - this.product.discount / 100);
    return discountedPrice * this.quantity;
  }

  // New method to show product name and stock quantity
  getProductStockInfo(): string {
    return `${this.product.productName} - ${this.product.stockQuantity} in stock`;
  }
}
