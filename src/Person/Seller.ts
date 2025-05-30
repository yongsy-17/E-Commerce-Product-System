import { Person } from "./Person";
export class Seller extends Person {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public storeName: string,
        public rating: number
    ) {
        super(id, name, email);
    }

    getDetails(): string {
        return `Seller ID: ${this.id}, Name: ${this.name}, Store: ${this.storeName}, Rating: ${this.rating}`;
    }

    getStoreInfo(): string {
        return `Store Name: ${this.storeName}, Rating: ${this.rating}`;
    }
}