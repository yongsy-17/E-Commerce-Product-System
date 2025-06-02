// ✅ Imports organized and corrected
import { Order } from "../Shopping/Order";
import { OrderItem } from "../Shopping/Orderitem";
import { Person } from "../Person/Person";
import { DeliveryOption } from "../Deliver/DeliveryOption";
import { Product } from "../Product/Product";

// ✅ Seller class extending Person
export class Seller extends Person {
    private products: Product[] = [];
    private deliveryOption: DeliveryOption;

    constructor(
        id: number,
        name: string,
        age: number,
        private sellerId: string,
        deliveryOption: DeliveryOption
    ) {
        super(id, name, age);
        this.deliveryOption = deliveryOption;
    }

    /**
     * Returns all orders that include at least one product from this seller.
     * Each returned Order only contains OrderItems that belong to this seller.
     */
    getOrdersWithMyProducts(orders: Order[]): Order[] {
    return orders
        .map(order => {
            const sellerItems = order.getOrderItems().filter(
                (item: OrderItem) =>
                    item.getProduct().sellerId === parseInt(this.sellerId)
            );

            if (sellerItems.length > 0) {
                // Pass all required params to Order constructor
                return new Order(
                    order.getId(),
                    sellerItems,
                    order.getPaymentStatus(),
                    order.getDeliveryOption(),
                    order.getBuyerName()
                );
            }
            return null;
        })
        .filter((order): order is Order => order !== null);
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
