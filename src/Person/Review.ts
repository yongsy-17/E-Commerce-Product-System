export class Review {
  constructor(
    public reviewerName: string,
    public rating: number, // e.g., 1-5
    public comment: string,
    public productId: number,
    public date: Date = new Date()
  ) {}

  getSummary(): string {
    return `${this.reviewerName} rated ${this.rating}/5: "${this.comment}"`;
  }
}