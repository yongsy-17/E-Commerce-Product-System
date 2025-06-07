import { Person } from "./Person";
import { Seller } from "./Seller";

export class Admin extends Person {
    constructor(
        id: string,
        name: string,
        age: number,
        private adminId: string,
    ) {
        super(0, name, age); // call parent constructor
        this.adminId = adminId;
    }

    viewSellerStock(sellers: Seller[ ]): void{
        sellers
    }
}
