import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';
//@@tag-Version-2201011
export class DonateTargetPeriodSponsorModel extends BaseModuleEntity<number> {
  linkTargetPeriodId: number;
  targetPeriod: DonateTargetPeriodModel;
  virtual_TargetPeriod: DonateTargetPeriodModel;
  linkSponsorId: number;
  sponsor: DonateSponsorModel;
  virtual_Sponsor: DonateSponsorModel;
  payment: number;
}
