
import { HyperShopOrderTypeEnum } from '../../enums/base/hyperShopOrderTypeEnum';
import { HyperShopPaymentTypeEnum } from '../../enums/base/hyperShopPaymentTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { HyperShopOrderContentModel } from './hyperShopOrderContentModel';
//@@tag-Version-2201011
export class HyperShopOrderModel extends BaseModuleEntity<number>{
  paymentType: HyperShopPaymentTypeEnum;
  orderType: HyperShopOrderTypeEnum;
  systemTransactionId: number;
  systemPaymentIsSuccess: number;
  systemMicroServiceOrderId: string;
  systemMicroServiceAccept: boolean;
  systemMicroServiceId: string;
  systemMicroServiceIsSuccess: boolean;
  systemMicroServiceErrorMessage: string;
  name: string;
  family: string;
  mobile: string;
  geoLocationLatitude: string;
  geoLocationLongitude: string;
  address: string;
  amount: number;
  amountPure: number;
  feeTransport: number;
  feeTax: number;
  products: HyperShopOrderContentModel[];
}
