import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';

export class DonateTargetPeriodSponsorModel extends BaseModuleEntity<number> {
  LinkTargetPeriodId: number;
  TargetPeriod: DonateTargetPeriodModel;
  virtual_TargetPeriod: DonateTargetPeriodModel;
  LinkSponsorId: number;
  Sponsor: DonateSponsorModel;
  virtual_Sponsor: DonateSponsorModel;
  payment: number;
}
