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

// Get shipment details (address, city, delivery type and cost)
// Purpose: Return a string summarizing shipment info
// Param: shipment - Shipment instance
const details = manager.getShipmentDetails(shipment1);

// Fix typos: CLOTHING and ELECTRONIC
const tshirt = new Product(1, "T-shirt", Categories.CLOSTHING, 5, 2, 20, 1001,[]);
const cable = new Product(2, "USB Cable", Categories.ELECTRONICE, 3, 1, 15, 1001,[]);


// Create order items (individual product orders)
// Purpose: Encapsulate a product with quantity and delivery type
// Params:
//  - id: unique order item id
//  - deliveryType: delivery method string
//  - quantity: number of units ordered
//  - product: Product instance
const item1 = new OrderItem(1, "EXPRESS", 2, tshirt);
const item2 = new OrderItem(2, "EXPRESS", 1, cable);

// Create order with those items and payment status
// Purpose: Represent customer order with multiple items and delivery option
// Params:
//  - id: order id
//  - orderItems: array of OrderItem instances
//  - paymentStatus: string e.g. 'PAID'
//  - deliveryOption: DeliveryOption instance
//  - customerName: string
const myOrderForSeller = new Order(1, [item1, item2], "PAID", expressOption, "Sokchea");

// Output shipment details
console.log("Shipment details:", details);

// Output product info from order items (instead of OrderItem details)
// Purpose: Display product name, price, discount, quantity and total cost
// Use getters to access data securely
console.log("Products in Order:");
myOrderForSeller.getOrderItems().forEach((item, index) => {
  const product = item.getProduct();
  const quantity = item.getQuantity();
  const pricePerItem = product.price;
  const discount = product.discount;
  const discountedPrice = pricePerItem * (1 - discount / 100);
  const totalItemPrice = discountedPrice * quantity;

  console.log(
    `#${index + 1}: ${product.productName} | Price: $${pricePerItem.toFixed(2)} | Discount: ${discount}% | Quantity: ${quantity} | Total: $${totalItemPrice.toFixed(2)}`
  );
});

console.log(`Delivery Fee: $${myOrderForSeller.getDeliveryOption().cost.toFixed(2)}`);
console.log(`Total Price: $${myOrderForSeller.getTotalPrice().toFixed(2)}`);

// Admin check stock example - seller managing products and stock
const expressDelivery = new DeliveryOption(DeliveryType.EXPRESS, 5);
const seller = new Seller(1, "Sokha", 30, "1001", expressDelivery);

const product1 = new Product(1, "T-Shirt", Categories.CLOSTHING, 19.99, 10, 0, 1001,[]);
const product2 = new Product(2, "USB Cable", Categories.ELECTRONICE, 9.99, 20, 5, 1001,[]);
const product3 = new Product(3, "Laptop Stand", Categories.ELECTRONICE, 29.99, 5, 10, 1001,[]);

// Add products to seller's inventory
seller.addProduct(product1);
seller.addProduct(product2);
seller.addProduct(product3);

// Get orders containing seller’s products
// const ordersWithSellerProducts = seller.getOrdersWithMyProducts([myOrderForSeller]);

// console.log(`Seller ${seller.getName()}'s Orders:`);
// console.log(ordersWithSellerProducts);

console.log("Product List:");
seller.getProductList().forEach((p, index) => {
  console.log(`#${index + 1}: ${p.productName} - ${p.stockQuantity} in stock - Price: $${p.price.toFixed(2)}`);
});

console.log(`Total stock for ${seller.getName()}: ${seller.getTotalStock()} items`);

// Update product stock for given product IDs
// Purpose: Change stock quantity of a product by its ID
// Params:
//  - productId: string or number representing product ID
//  - newStock: number representing new stock quantity
seller.updateProductStock("1", 20);   // valid ID
seller.updateProductStock("3", 15);   // valid ID
function demonstrateReviewSystem(): void {
  const product = new Product(1, "Wireless Headphones",Categories.CLOSTHING,8,3,3,3,[]);
  

  product.addReview(5, "Amazing sound quality!","TiTi");
  product.addReview(4, "Good but battery could be better", "Bob");
  product.addReview(3, "Decent for the price", "Charlie");

  console.log(product.displayProductInfo());

}
//user stroy 6======
  demonstrateReviewSystem();

// user story 2
const sokhaOrders = seller.getOrdersWithMyProducts([myOrderForSeller]);

const formattedOrders = sokhaOrders.map(order => ({
  id: order.getId(),
  items: order.getOrderItems().map(item => ({
    product: {
      id: item.getProduct().id,
      name: item.getProduct().productName,
      price: item.getProduct().price
    },
    quantity: item.getQuantity()
  })),
  paymentStatus: order.getPaymentStatus(),
  deliveryOption: {
    type: order.getDeliveryOption().getType(),
    cost: order.getDeliveryOption().getCost()
  },
  buyerName: order.getBuyerName()
}));

console.log(`Seller ${seller.getName()}'s Orders:`);
console.log(JSON.stringify(formattedOrders, null, 2));

