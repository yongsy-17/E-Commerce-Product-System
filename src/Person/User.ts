import { Person } from "./Person";

export class User extends Person {
    public shoppingAddress: string;
    private phoneNumber: number;

    constructor(
        shoppingAddress: string,
        phoneNumber: number,
        id: number,
        name: string,
        email: string
    ) {
        super(id, name, email);
        this.shoppingAddress = shoppingAddress;
        this.phoneNumber = phoneNumber;
    }

    getDetails(): string {
        return `User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shoppingAddress}`;
    }
}

