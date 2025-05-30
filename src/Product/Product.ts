export class Product {
    private Id :number;
    private productName: string;
    private category :string;
    private price :number;
    private stockQuantity : number;
    private discount :number = 0;
    private sellerId : number;

    constructor (
        Id: number,
        productName: string,
        category: string,
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

    getDiscountedPrice(): void{

    }
    getInStock():void{}

}