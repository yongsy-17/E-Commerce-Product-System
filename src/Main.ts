import { User } from "./Person/User";
import { Seller } from "./Person/Seller";
import { Review } from "./Person/Review";
import { Order } from "./Shopping/Order";
import { Product } from "./Product/Product";
import { Shipment } from "./Deliver/Shipment";
import { OrderItem } from "./Shopping/Orderitem";
import { Categories } from "./Product/Categories";
import { ShoppingCart } from "./Shopping/ShoppingCart";
import { DeliveryOption } from "./Deliver/DeliveryOption";
import { DeliveryManager } from "./Deliver/DeliveryManager";
import { DeliveryType } from "./Deliver/DeliveryType";
import { DeliveryStatus } from "./Deliver/DeliveryStatus";
import { Invoice } from "./Payment/Invoice";
import { OrderHistory } from "./Shopping/OrderHistory";
import { Person } from "./Person/Person";



// Create products
const tshirt = new Product(1, "T-shirt", Categories.CLOSTHING, 5, 2, 20, 1001, []);
const cable = new Product(2, "USB Cable", Categories.ELECTRONICE, 3, 1, 15, 1001, []);

// Create delivery option
const expressOption = new DeliveryOption(DeliveryType.EXPRESS, 10);

// Create order items
const item1 = new OrderItem(1, "EXPRESS", 2, tshirt);
const item2 = new OrderItem(2, "EXPRESS", 1, cable);

// Create customer order
const myOrderForSeller = new Order(1, [item1, item2], "PAID", expressOption, "Sokchea");

// Display order breakdown
console.log("User Story 1: Order Summary");
console.log("Products in Order:");
myOrderForSeller.getOrderItems().forEach((item, index) => {
  const product = item.getProduct();
  const quantity = item.getQuantity();
  const price = product.price;
  const discount = product.discount;
  const discountedPrice = price * (1 - discount / 100);
  const totalItemPrice = discountedPrice * quantity;

  console.log(
    `#${index + 1}: ${product.productName} | Price: $${price.toFixed(2)} | Discount: ${discount}% | Quantity: ${quantity} | Total: $${totalItemPrice.toFixed(2)}`
  );
});
console.log(`Delivery Fee: $${myOrderForSeller.getDeliveryOption().cost.toFixed(2)}`);
console.log(`Total Price: $${myOrderForSeller.getTotalPrice().toFixed(2)}`);
// end user story 1

// user story 2

// Create seller
const expressDelivery = new DeliveryOption(DeliveryType.EXPRESS, 5);
const seller = new Seller(1, "Sokha", 30, "1001", expressDelivery);

// Add products to seller
const product1 = new Product(1, "T-Shirt", Categories.CLOSTHING, 19.99, 10, 0, 1001, []);
const product2 = new Product(2, "USB Cable", Categories.ELECTRONICE, 9.99, 20, 5, 1001, []);
const product3 = new Product(3, "Laptop Stand", Categories.ELECTRONICE, 29.99, 5, 10, 1001, []);
seller.addProduct(product1);
seller.addProduct(product2);
seller.addProduct(product3);

// Get seller orders from all customer orders
const sokhaOrders = seller.getOrdersWithMyProducts([myOrderForSeller]);

// Format order data
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

console.log(`User Story 2: Seller ${seller.getName()}'s Orders:`);
console.log(JSON.stringify(formattedOrders, null, 2));
//end user story 2

// user story 3

const shipment1 = new Shipment("370 street", "Phnom Penh", expressOption);
const manager = new DeliveryManager(1, "Sokha");

const shipmentDetails = manager.getShipmentDetails(shipment1);
console.log("User Story 3: Shipment Details");
console.log("Shipment details:", shipmentDetails);
// end user story 3

// ============================
// User Story 4: Admin views seller product stock
// ============================
console.log("User Story 4: Seller Product Stock");
console.log("Product List:");
seller.getProductList().forEach((p, index) => {
  console.log(`#${index + 1}: ${p.productName} - ${p.stockQuantity} in stock - Price: $${p.price.toFixed(2)}`);
});
console.log(`Total stock for ${seller.getName()}: ${seller.getTotalStock()} items`);

// Update stock for specific products
seller.updateProductStock("1", 20);
seller.updateProductStock("3", 15);


// user story5




console.log("");

const customer = new User(1, "John Doe", 25, "john@example.com", "password123", "123 Main St", 123456789);
console.log("User Story 5: Customer cancels order items and gets refund details");
console.log("Customer:",customer.getName());


// Collect product stock info into an array
const productStockArray = seller.getProductList().map((p, index) => ({
  product: index + 1,
  productName: p.productName,
  stockQuantity: p.stockQuantity,
  price: `$${p.price.toFixed(2)}`
}));

console.log("Product that",customer.getName(),"canceled:", productStockArray);
console.log(`Total price returned: $${product1.price + product2.price + product3.price}`);


// user story 6
function demonstrateReviewSystem(): void {
  const product = new Product(1, "Wireless Headphones",Categories.CLOSTHING,8,3,3,3,[]);
  

  product.addReview(5, "Amazing sound quality!","TiTi");
  product.addReview(4, "Good but battery could be better", "Bob");
  product.addReview(3, "Decent for the price", "Charlie");

  console.log(product.displayProductInfo());

}
// user stroy 6======
  demonstrateReviewSystem();
//user story 7
// Create a customer cart
const myCart = new ShoppingCart("Sokchea");

// Add to cart
myCart.addProduct(product1, 1);
myCart.addProduct(product2, 3);

// View cart
myCart.viewCart();

// Checkout
const delivery = new DeliveryOption(DeliveryType.STANDARD, 3.99);
const myOrder = myCart.checkout(delivery);

const invoice = new Invoice(1, 101); // productId: 101
myOrder.addInvoice(invoice);

// Update review after delivery
invoice.updateReview(4, "Great product, fast delivery!");

// Display all invoices
myOrder.getInvoices().forEach(inv => {
  console.log(inv.displayInvoice());
});
console.log(myOrder)


const itemA = new OrderItem(3, "STANDARD", 1, product3);
const newOrder = new Order(102, [itemA], "PAID", delivery, "Chantha");

const person = new Person(1, "Yongsy Din", 20); 
const history = new OrderHistory(newOrder, person);

// Later update
const admin = new Person(2, "Admin User", 30); 
history.updateHistory(admin);
console.log(history)
