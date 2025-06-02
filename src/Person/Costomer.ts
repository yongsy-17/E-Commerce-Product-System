import { Review } from "./Review";

export class Customer {
  private customerId: string;
  private name: string;

  constructor(customerId: string, name: string) {
    if (!customerId || !name.trim()) {
      throw new Error("Customer ID and name must not be empty");
    }
    this.customerId = customerId;
    this.name = name.trim();
  }

  // Getter methods
  getCustomerId(): string {
    return this.customerId;
  }

  getName(): string {
    return this.name;
  }

  submitReview( productId: string, rating: number, comment: string): Review {
    return reviewSystem.submitReview(this.customerId, productId, rating, comment);
  }
}