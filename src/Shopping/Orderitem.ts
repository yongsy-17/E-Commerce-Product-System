import { DeliveryOption } from "../Deliver/DeliveryOption";
import { Product } from "../Product/Product";

export class OrderItem {
  getId() {
      throw new Error("Method not implemented.");
  }
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
  public getdeliveryOpt():string{
    return this.deliveryOpt;
  }

  public getShipmentId():number{
    return this.shipmentId
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getProduct(): Product {
    return this.product;
  }

  // public getTotalPrice(): number {
  //   const discountedPrice = this.product.price * (1 - this.product.discount / 100);
  //   return discountedPrice * this.quantity;
  // }
  getTotalPrice(): number {
  const product = this.getProduct();
  const price = product.price;
  const discount = product.discount;
  const discountedPrice = price * (1 - discount / 100);
  return discountedPrice * this.getQuantity();
}

  // New method to show product name and stock quantity
  public getProductStockInfo(): string {
    return `${this.product.productName} - ${this.product.stockQuantity} in stock`;
  }
  
}
