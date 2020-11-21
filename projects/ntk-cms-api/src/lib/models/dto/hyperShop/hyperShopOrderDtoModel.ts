import { HyperShopOrderContentDtoModel } from './hyperShopOrderContentDtoModel';

export class HyperShopOrderDtoModel {
  OrderId: string;
  AcceptSystem: boolean;
  name: string;
  family: string;
  mobile: string;
  address: string;
  amount: number;
  Products: HyperShopOrderContentDtoModel[];
}
