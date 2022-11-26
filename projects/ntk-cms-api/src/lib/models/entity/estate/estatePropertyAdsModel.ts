import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstatePropertyAdsModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  stationLevel: number;
  viewLevel: number;
  linkPropertyId: string;
  fromDate: Date;
  expireDate: Date;
  linkAdsTypeId: string;
  systemTransactionId: number;
  systemPaymentIsSuccess: number;
  amountPure: number;
  feeTransport: number;
  feeTax: number;
  amount: number;
}
