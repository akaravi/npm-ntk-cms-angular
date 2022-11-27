import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetModel } from './donateTargetModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';
import { DonateTransactionModel } from './donateTransactionModel';
//@@tag-Version-2201011
export class DonateTargetPeriodModel extends BaseModuleEntity<number> {
  title: string;
  description: string;
  supportRequiredPayment: number;
  linkTargeId?: number;
  target: DonateTargetModel;
  virtual_Target: DonateTargetModel;
  shareBeginDate?: Date;
  shareExpireDate?: Date;
  currentClickCount: number;
  currentViewCount: number;
  currentPaymentCount: number;
  currentPaymentSum: number;
  targetPeriodSponsors: DonateTargetPeriodSponsorModel[];
  transactions: DonateTransactionModel[];
}
