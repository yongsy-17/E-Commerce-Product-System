import { OrderItem } from "./Orderitem";
import { DeliveryOption } from "../Deliver/DeliveryOption";

export class Order {
    private Id :number;
    private orderItem: OrderItem[];
    private paymentStatus: string;
    private dileveryOption: DeliveryOption

    constructor (
        Id: number,
        orderItem:OrderItem[],
        paymentStatus:string,
        dileveryOption:DeliveryOption
    ){
        this.Id = Id,
        this.orderItem = orderItem,
        this.paymentStatus = paymentStatus
        this.dileveryOption = dileveryOption

    }

   

}