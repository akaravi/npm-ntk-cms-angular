import { HyperShopOrderContentDtoModel } from './hyperShopOrderContentDtoModel';

export class HyperShopOrderDtoModel {
  orderId: string;
  acceptSystem: boolean;
  name: string;
  family: string;
  mobile: string;
  address: string;
  amount: number;
  products: HyperShopOrderContentDtoModel[];
}
