import { Product } from "../Product/Product";
export class OrderItem {
    private quantity : number;
    private deliveryOpt :string;
    private shipmentId :number;
    private product: Product;

    constructor(
        quantity: number,
        deliveryOpt: string,
        shipmentId: number,
        product: Product
        
    ){
        this.quantity = quantity,
        this.deliveryOpt = deliveryOpt,
        this.shipmentId = shipmentId,
        this.product = product
    }

    getTotalPrice(): number {
    const discountedPrice = this.product.price * (1 - this.product.discount / 100);
    return discountedPrice * this.quantity;
  }
  
}
