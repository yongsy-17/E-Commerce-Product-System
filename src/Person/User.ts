import { Person } from "./Person";
import { Order } from "../Shopping/Order";
import { OrderItem } from "../Shopping/Orderitem";
import { Product } from "../Product/Product";

export class User extends Person {
  private userId: number;
  private email: string;
  private password: string;
  private shippingAddress: string;
  private phonenumber: number;

  constructor(
    userId: number,
    name: string,
    age: number,
    email: string,
    password: string,
    shippingAddress: string,
    phonenumber: number
  ) {
    super(userId, name, age);
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.shippingAddress = shippingAddress;
    this.phonenumber = phonenumber;
  }

  getUserId(): number {
    return this.userId;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getShippingAddress(): string {
    return this.shippingAddress;
  }

  getPhonenumber(): number {
    return this.phonenumber;
  }

  createOrder(orderId: number, items: OrderItem[], paymentStatus: string, deliveryOption: any, buyerName: string): Order {
    return new Order(orderId, items, paymentStatus, deliveryOption, buyerName);
  }

  cancelItem(order: Order, productId: number): void {
    order.cancelOrderItem(productId);
  }

  leaveReview(product: Product, rating: number, comment: string): void {
    product.addReview(rating, comment, this.getName());
  }
  
}
