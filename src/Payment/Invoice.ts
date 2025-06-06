export class Invoice {
  private id: number;
  private productId: number;
  private rating: number;
  private comment: string;

  constructor(id: number, productId: number, rating: number = 0, comment: string = "") {
    this.id = id;
    this.productId = productId;
    this.rating = rating;
    this.comment = comment;
  }

  /**
   * Displays the invoice information
   */
  displayInvoice(): string {
    return `Invoice #${this.id} | Product ID: ${this.productId} | Rating: ${this.rating} | Comment: ${this.comment}`;
  }

  /**
   * Checks if this invoice has a review
   */
  hasReview(): boolean {
    return this.rating > 0 || this.comment.length > 0;
  }

  /**
   * Updates the review details
   * @param rating Rating out of 5
   * @param comment Written feedback
   */
  updateReview(rating: number, comment: string): void {
    this.rating = rating;
    this.comment = comment;
    console.log(`Review updated for Invoice #${this.id}`);
  }
}
