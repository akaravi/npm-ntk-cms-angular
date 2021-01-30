
import { EnumHyperShopOrderType } from '../../enums/enumHyperShopOrderType';
import { EnumHyperShopPaymentType } from '../../enums/enumHyperShopPaymentType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { HyperShopOrderContentModel } from './hyperShopOrderContentModel';

export class HyperShopOrderModel extends BaseModuleEntity<number>{
  PaymentType: EnumHyperShopPaymentType;
  OrderType: EnumHyperShopOrderType;
  SystemTransactionId: number;
  SystemPaymentIsSuccess: number;
  SystemMicroServiceOrderId: string;
  SystemMicroServiceAccept: boolean;
  SystemMicroServiceId: string;
  SystemMicroServiceIsSuccess: boolean;
  SystemMicroServiceErrorMessage: string;
  Name: string;
  Family: string;
  Mobile: string;
  GeoLocationLatitude: string;
  GeoLocationLongitude: string;
  Address: string;
  Amount: number;
  AmountPure: number;
  FeeTransport: number;
  FeeTax: number;
  Products: HyperShopOrderContentModel[];


}
