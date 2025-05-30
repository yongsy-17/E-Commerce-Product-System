import { Shipment } from "./Shipment";

export class DeliveryManager {
  constructor(public id: number, public name: string) {}

  getShipmentDetails(shipment: Shipment): string {
    return `Shipment Tracking Number: ${shipment.trackingNumber}
        Destination: ${shipment.destination}
        Delivery Method: ${shipment.deliveryOption.type}
        Delivery Cost: ${shipment.deliveryOption.cost}`;
  }
}
