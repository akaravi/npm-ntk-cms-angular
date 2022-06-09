import { BaseModuleEntity } from '../base/baseModuleEntity';

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
