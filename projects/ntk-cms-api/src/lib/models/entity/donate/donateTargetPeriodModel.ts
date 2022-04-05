import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetModel } from './donateTargetModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';
import { DonateTransactionModel } from './donateTransactionModel';

export class DonateTargetPeriodModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  SupportRequiredPayment: number;
  LinkTargeId?: number;
  Target: DonateTargetModel;
  virtual_Target: DonateTargetModel;
  ShareBeginDate?: Date;
  ShareExpireDate?: Date;
  CurrentClickCount: number;
  CurrentViewCount: number;
  CurrentPaymentCount: number;
  CurrentPaymentSum: number;
  TargetPeriodSponsors: DonateTargetPeriodSponsorModel[];
  Transactions: DonateTransactionModel[];
}
