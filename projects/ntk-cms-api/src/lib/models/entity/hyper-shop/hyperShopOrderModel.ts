
import { EnumHyperShopOrderType } from '../../enums/base/enumHyperShopOrderType';
import { EnumHyperShopPaymentType } from '../../enums/base/enumHyperShopPaymentType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { HyperShopOrderContentModel } from './hyperShopOrderContentModel';

export class HyperShopOrderModel extends BaseModuleEntity<number>{
  paymentType: EnumHyperShopPaymentType;
  orderType: EnumHyperShopOrderType;
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
