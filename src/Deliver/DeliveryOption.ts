import { DeliveryType } from './DeliveryType';

export class DeliveryOption {
  constructor(
    public type: DeliveryType,
    public cost: number 
  ) {}

  getname(): string {
    return this.type;
  }

  getType(): string {
    return this.type;
  }

  getCost(): number {
    return this.cost;
  }
}
