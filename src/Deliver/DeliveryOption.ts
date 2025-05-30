import { DeliveryType } from './DeliveryType';
export class DeliveryOption {
  constructor(
    public type: DeliveryType,
    public cost: number
  ) {}
}
