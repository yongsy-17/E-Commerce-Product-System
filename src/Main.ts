import { Shipment } from "./Deliver/Shipment";
import { DeliveryOption } from "./Deliver/DeliveryOption";
import { DeliveryManager } from "./Deliver/DeliveryManager";
import { DeliveryType } from "./Deliver/DeliveryType";
//check the delivery method and destination of each shipment
const expressOption = new DeliveryOption(DeliveryType.EXPRESS, 10);
const shipment1 = new Shipment("TRK123456", "Phnom Penh", expressOption);

const manager = new DeliveryManager(1, "Sokha");
const details = manager.getShipmentDetails(shipment1);
console.log(details);
