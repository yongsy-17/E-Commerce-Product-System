import { Product } from "./Product/Product";
import { OrderItem } from "./Shopping/Orderitem";
import { Order } from "./Shopping/Order";
import { Shipment } from "./Deliver/Shipment";
import { DeliveryOption } from "./Deliver/DeliveryOption";
import { DeliveryManager } from "./Deliver/DeliveryManager";
import { DeliveryType } from "./Deliver/DeliveryType";

// Setup
const expressOption = new DeliveryOption(DeliveryType.EXPRESS, 10);
const shipment1 = new Shipment("TRK123456", "Phnom Penh", expressOption);

const manager = new DeliveryManager(1, "Sokha");
const details = manager.getShipmentDetails(shipment1);

const tshirt = new Product(1, "T-Shirt", "20", 5, 2, 20, 1);
const cable = new Product(2, "USB Cable", "15", 3, 1, 15, 1);

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
