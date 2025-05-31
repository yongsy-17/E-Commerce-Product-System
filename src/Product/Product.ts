import { Categories } from "./Categories";

export class Product {
    public Id :number;
    public productName: string;
    public category :Categories;
    public price :number;
    public stockQuantity : number;
    public discount :number = 0;
    public sellerId : number;

    constructor (
        Id: number,
        productName: string,
        category: Categories,
        price: number,
        stockQuantity: number,
        discount: number,
        sellerId :number,
    ){
        this.Id = Id,
        this.productName = productName,
        this.category = category,
        this.price = price,
        this.stockQuantity = stockQuantity,
        this.discount = discount,
        this.sellerId  = sellerId
    }

    getproduct():void{
        return
    }

    getDiscountedPrice(): void{

    }
    getInStock():void{}

}