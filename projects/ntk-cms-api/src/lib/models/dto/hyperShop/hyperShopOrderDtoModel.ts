import { HyperShopOrderContentDtoModel } from './hyperShopOrderContentDtoModel';

export class HyperShopOrderDtoModel {
  OrderId: string;
  AcceptSystem: boolean;
  Name: string;
  Family: string;
  Mobile: string;
  Address: string;
  Amount: number;
  Products: HyperShopOrderContentDtoModel[];
}
