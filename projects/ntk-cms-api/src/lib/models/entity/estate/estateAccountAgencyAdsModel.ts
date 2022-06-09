import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountAgencyAdsModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  stationLevel: number;
  viewLevel: number;
  linkAccountAgencyId: string;
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
