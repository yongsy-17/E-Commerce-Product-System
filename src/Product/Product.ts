import { Review } from "../Person/Review";
import { Categories } from "./Categories";
import { IProduct } from "./IProduct";
import { IReview } from "../Person/IReview";

export class Product implements IProduct {
    constructor(
        public id: number,
        public productName: string,
        public category: Categories,
        public price: number,
        public stockQuantity: number,
        public discount: number = 0,
        public sellerId: number,
        private reviews: IReview[]
    ) {}

    getProduct(): string {
        return `${this.productName} - $${this.price.toFixed(2)} (${this.stockQuantity} in stock, ${this.discount}% off)`;
    }
    getName(){
      return this.productName
    }
    getDiscountedPrice(): number {
        return parseFloat((this.price * (1 - this.discount / 100)).toFixed(2));
    }

    getInStock(): boolean {
        return this.stockQuantity > 0;
    }

    addReview(rating: number, comment: string, customerName: string): void {
    if (rating < 1 || rating > 5) {
      throw new Error("Rating must be between 1 and 5");
    }
    const review: IReview = {
      rating,
      comment,
      customerName,
      date: new Date(),
    };
    this.reviews.push(review);
  }

  // Get all reviews for the product
  getReviews(): IReview[] {
    return this.reviews;
  }

  // Calculate average rating
  getAverageRating(): number {
    if (this.reviews.length === 0) return 0;
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return Number((total / this.reviews.length).toFixed(1));
  }

  // Display product and review information
  displayProductInfo(): string {
    let output = `\nProduct: ${this.productName}\nPrice: $${this.price}\nAverage Rating: ${this.getAverageRating()} stars\n`;
    output += "Reviews:\n";
    
    if (this.reviews.length === 0) {
      output += "No reviews yet.\n";
    } else {
      this.reviews.forEach((review, index) => {
        output += `Review ${index + 1}:\n`;
        output += `Customer: ${review.customerName}\n`;
        output += `Rating: ${review.rating} stars\n`;
        output += `Comment: ${review.comment}\n`;
        output += `Date: ${review.date.toLocaleDateString()}\n\n`;
      });
    }
    return output;
  }
  
}