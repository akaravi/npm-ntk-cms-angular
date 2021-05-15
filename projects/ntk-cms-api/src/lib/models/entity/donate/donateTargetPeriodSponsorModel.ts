import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';

export class DonateTargetPeriodSponsorModel extends BaseModuleEntity<number> {
  LinkTargetPeriodId: number;
  TargetPeriod: DonateTargetPeriodModel;
  LinkSponsorId: number;
  Sponsor: DonateSponsorModel;
  payment: number;
}
