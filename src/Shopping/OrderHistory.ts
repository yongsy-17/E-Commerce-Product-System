import { Order } from "./Order";
import { Person } from "../Person/Person";
export class OrderHistory {
  private updatedAt: Date;
  private order: Order;
  private updatedBy: Person;

  constructor(order: Order, updatedBy: Person) {
    this.order = order;
    this.updatedBy = updatedBy;
    this.updatedAt = new Date();
  }

  // Getters
  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getOrder(): Order {
    return this.order;
  }

  getUpdatedBy(): Person {
    return this.updatedBy;
  }

  // Setters
  updateHistory(updatedBy: Person) {
    this.updatedBy = updatedBy;
    this.updatedAt = new Date(); // update timestamp
  }

}
