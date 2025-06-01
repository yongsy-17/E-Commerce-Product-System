import { Product } from "./Product/Product";
import { OrderItem } from "./Shopping/Orderitem";
import { Order } from "./Shopping/Order";
import { Shipment } from "./Deliver/Shipment";
import { DeliveryOption } from "./Deliver/DeliveryOption";
import { DeliveryManager } from "./Deliver/DeliveryManager";
import { DeliveryType } from "./Deliver/DeliveryType";
import { Categories } from "./Product/Categories";
import { Seller } from "./Person/Seller";

// check delivery option
const expressOption = new DeliveryOption(DeliveryType.EXPRESS, 10);
const shipment1 = new Shipment("370 street", "Phnom Penh", expressOption);

const manager = new DeliveryManager(1, "Sokha");
const details = manager.getShipmentDetails(shipment1);

const tshirt = new Product(1,"T-shert",Categories.CLOSTHING, 5, 2, 20, 1);
const cable = new Product(2, "USB Cable",Categories.ELECTRONICE, 3, 1, 15, 1);

const item1 = new OrderItem(1, "EXPRESS", 2, tshirt);
const item2 = new OrderItem(1, "EXPRESS", 2, cable);

const myOrder = new Order(1, [item1, item2], "PAID", expressOption);

// Output
console.log(details);
// User stories 1 =======
console.log("Items:");
myOrder['orderItems'].forEach((item, index) => {
  const product = item.getProduct();
  const quantity = item.getQuantity();
  const pricePerItem = product.price;
  const discount = product.discount;
  const discountedPrice = pricePerItem * (1 - discount / 100);
  const totalItemPrice = discountedPrice * quantity;

  console.log(
    `#${index + 1}: ${product.productName} x${quantity} - $${discountedPrice.toFixed(2)}  (Discount: ${discount}%) = $${totalItemPrice.toFixed(2)}`
  );
});

console.log(`Delivery Fee: $${myOrder['deliveryOption'].cost.toFixed(2)}`);
console.log(`Total Price: $${myOrder.getTotalPrice().toFixed(2)}`);
//admin check stock

// Create delivery option
const expressDelivery = new DeliveryOption(DeliveryType.EXPRESS, 5);

// Create seller
const seller = new Seller(1, "Sokha", 30, "1001",expressDelivery);

// Create products with correct constructor arguments
const product1 = new Product(1, "T-Shirt", Categories.CLOSTHING, 19.99, 10, 0, 1001);
const product2 = new Product(2, "USB Cable", Categories.ELECTRONICE, 9.99, 20, 5, 1001);
const product3 = new Product(3, "Laptop Stand", Categories.ELECTRONICE, 29.99, 5, 10, 1001);

// Add products to seller
seller.addProduct(product1);
seller.addProduct(product2);
seller.addProduct(product3);

// Display all products
console.log("Product List:");
seller.getProductList().forEach((p, index) => {
    console.log(`#${index + 1}: ${p.productName} - ${p.stockQuantity} in stock`);
});

// Show total stock
console.log(`Total stock for ${seller.getName()}: ${seller.getTotalStock()} items`);

