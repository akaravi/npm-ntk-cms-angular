import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetModel } from './donateTargetModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';
import { DonateTransactionModel } from './donateTransactionModel';

export class DonateTargetPeriodModel extends BaseModuleEntity<number> {
  Title: string;
  Description: string;
  LinkTargeId?: number;
  Target: DonateTargetModel;
  ShareBeginDate?: Date;
  ShareExpireDate?: Date;
  TargetPeriodSponsors: DonateTargetPeriodSponsorModel[];
  Transactions: DonateTransactionModel[];
}
