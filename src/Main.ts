import { Product } from "./Product/Product";
import { OrderItem } from "./Shopping/Orderitem";
import { Order } from "./Shopping/Order";
import { Shipment } from "./Deliver/Shipment";
import { DeliveryOption } from "./Deliver/DeliveryOption";
import { DeliveryManager } from "./Deliver/DeliveryManager";
import { DeliveryStatus, DeliveryType } from "./Deliver/DeliveryType";
import { Categories } from "./Product/Categories";
import { Seller } from "./Person/Seller";


import { Review } from "./Person/Review";

// Create delivery option and shipment
const expressOption = new DeliveryOption(DeliveryType.EXPRESS, 10);
const shipment1 = new Shipment("370 street", "Phnom Penh", expressOption);

const manager = new DeliveryManager(1, "Sokha");
const details = manager.getShipmentDetails(shipment1);

// Fix typos: CLOTHING and ELECTRONIC
const tshirt = new Product(1, "T-shirt", Categories.CLOSTHING, 5, 2, 20, 1001,[]);
const cable = new Product(2, "USB Cable", Categories.ELECTRONICE, 3, 1, 15, 1001,[]);

// Create order items
const item1 = new OrderItem(1, "EXPRESS", 2, tshirt);
const item2 = new OrderItem(2, "EXPRESS", 1, cable);

// Create order with those items
const myOrderForSeller = new Order(1, [item1, item2], "PAID", expressOption, "Sokchea");


// Output shipment details
console.log("Shipment details:", details);

// Output order items summary using getters, not direct access
console.log("Items:");
myOrderForSeller.getOrderItems().forEach((item, index) => {
  const product = item.getProduct();
  const quantity = item.getQuantity();
  const pricePerItem = product.price;
  const discount = product.discount;
  const discountedPrice = pricePerItem * (1 - discount / 100);
  const totalItemPrice = discountedPrice * quantity;

  console.log(
    `#${index + 1}: ${product.productName} x${quantity} - $${discountedPrice.toFixed(
      2
    )} (Discount: ${discount}%) = $${totalItemPrice.toFixed(2)}`
  );
});

console.log(`Delivery Fee: $${myOrderForSeller.getDeliveryOption().cost.toFixed(2)}`);
console.log(`Total Price: $${myOrderForSeller.getTotalPrice().toFixed(2)}`);

// Admin check stock example
const expressDelivery = new DeliveryOption(DeliveryType.EXPRESS, 5);
const seller = new Seller(1, "Sokha", 30, "1001", expressDelivery);

const product1 = new Product(1, "T-Shirt", Categories.CLOSTHING, 19.99, 10, 0, 1001,[]);
const product2 = new Product(2, "USB Cable", Categories.ELECTRONICE, 9.99, 20, 5, 1001,[]);
const product3 = new Product(3, "Laptop Stand", Categories.ELECTRONICE, 29.99, 5, 10, 1001,[]);

seller.addProduct(product1);
seller.addProduct(product2);
seller.addProduct(product3);
// Create a review for the seller
const sellersy = new Seller(1, "Seller One", 40, "1", expressDelivery);
seller.addProduct(product1);
seller.addProduct(product2);



const ordersWithSellerProducts = seller.getOrdersWithMyProducts([myOrderForSeller]);

console.log(`Seller ${seller.getName()}'s Orders:`);
console.log(ordersWithSellerProducts);

console.log("Product List:");
seller.getProductList().forEach((p, index) => {
  console.log(`#${index + 1}: ${p.productName} - ${p.stockQuantity} in stock`);
});

console.log(`Total stock for ${seller.getName()}: ${seller.getTotalStock()} items`);


// Create order items and assign IDs for demonstration
const orderItem1 = new OrderItem(1, "EXPRESS", 2, tshirt) as any;
orderItem1.id = 1;
const orderItem2 = new OrderItem(1, "EXPRESS", 2, cable) as any;
orderItem2.id = 2;

// Create an order with these items
const myOrder = new Order(123, [orderItem1, orderItem2], "PAID", expressOption, "John Doe");
  console.log("       ");
  console.log("List of order items after cancellation:");

console.log("Initial total order price: $" + myOrder.getTotalPrice().toFixed(2));

// Cancel order item with ID 1 (T-shirt)
const refundAmount = myOrder.cancelOrderItem(1);
if (refundAmount !== null) {
  console.log(`Order item canceled. Refund amount: $${refundAmount.toFixed(2)}`);
  console.log(`Updated total order price: $${myOrder.getTotalPrice().toFixed(2)}`);
} else {
  console.log("Item not found in the order.");
}
function demonstrateReviewSystem(): void {
  const product = new Product(1, "Wireless Headphones",Categories.CLOSTHING,8,3,3,3,[]);
  

  product.addReview(5, "Amazing sound quality!","TiTi");
  product.addReview(4, "Good but battery could be better", "Bob");
  product.addReview(3, "Decent for the price", "Charlie");

  console.log(product.displayProductInfo());

}
//user stroy 6======
  demonstrateReviewSystem();
