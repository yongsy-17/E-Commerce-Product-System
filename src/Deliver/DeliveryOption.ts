import { DeliveryType } from './DeliveryType';

export class DeliveryOption {
  constructor(
    public type: DeliveryType,
    public cost: number 
  ) {}

  getType(): DeliveryType {
    return this.type;
  }

  getCost(): number {
    return this.cost;
  }
}
