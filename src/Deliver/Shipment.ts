import { DeliveryOption } from './DeliveryOption';
export class Shipment {
  constructor(
    public trackingNumber: string,
    public destination: string,
    public deliveryOption: DeliveryOption
  ) {}

  getDeliveryDetails(): string {
    return `Type: ${this.deliveryOption.type}, Destination: ${this.destination}`;
  }
}
