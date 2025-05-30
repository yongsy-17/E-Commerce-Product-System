export class Orderitem {
    private quantity : number;
    private deliveryOpt :string;
    private shipmentId :number

    constructor(
        quantity: number,
        deliveryOpt: string,
        shipmentId: number
    ){
        this.quantity = quantity,
        this.deliveryOpt = deliveryOpt,
        this.shipmentId = shipmentId
    }

    getTotalPrice():void {
    
  }
}
