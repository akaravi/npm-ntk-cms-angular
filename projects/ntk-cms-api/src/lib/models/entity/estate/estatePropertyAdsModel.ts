import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstatePropertyAdsModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  StationLevel: number;
  ViewLevel: number;
  LinkPropertyId: string;
  FromDate: Date;
  ExpireDate: Date;
  LinkAdsTypeId: string;
  SystemTransactionId: number;
  SystemPaymentIsSuccess: number;
  AmountPure: number;
  FeeTransport: number;
  FeeTax: number;
  Amount: number;
}
