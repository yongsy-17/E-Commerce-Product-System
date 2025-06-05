import { Categories } from "./Categories";

export class Product {
    constructor(
        public id: number,
        public productName: string,
        public category: Categories,
        public price: number,
        public stockQuantity: number,
        public discount: number = 0,
        public sellerId: number
    ) {}

    // Returns a summary of the product
    getProduct(): string {
        return `${this.productName} - $${this.price.toFixed(2)} (${this.stockQuantity} in stock, ${this.discount}% off)`;
    }

    getDiscountedPrice(): number {
        return parseFloat((this.price * (1 - this.discount / 100)).toFixed(2));
    }

    getInStock(): boolean {
        return this.stockQuantity > 0;
    }
   
}
