import { Person } from "../Person/Person";
import { DeliveryOption } from "../Deliver/DeliveryOption";
import { Product } from "../Product/Product"
export class Seller extends Person {
    private products: Product[] = [];
    private DeliveryOptions: DeliveryOption;
    
    constructor(
        id: number,
        name: string,
        age: number,
        private sellerId: string,
        DeliveryOption: DeliveryOption
    ) {
        super(id, name, age);
        this.sellerId = sellerId;
        this.DeliveryOptions = DeliveryOption;
        
    }
    
    addProduct(product: Product): void {
        if (product.sellerId === parseInt(this.sellerId)) {
            this.products.push(product);
        } else {
            throw new Error("Product sellerId does not match Seller's ID");
        }
    }

    getProductList(): Product[] {
        return this.products;
    }

    getTotalStock(): number {
        return this.products.reduce((total, product) => total + product.stockQuantity, 0);
    }
}