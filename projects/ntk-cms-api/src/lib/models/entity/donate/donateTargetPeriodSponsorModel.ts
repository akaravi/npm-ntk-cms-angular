import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';
//@@tag-Version-2201011
/**
 * مدل حامی دوره هدف اهدا
 */
export class DonateTargetPeriodSponsorModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دوره هدف */
  linkTargetPeriodId: number;
  /** دوره هدف */
  targetPeriod: DonateTargetPeriodModel;
  virtual_TargetPeriod: DonateTargetPeriodModel;
  /** لینک به شناسه حامی */
  linkSponsorId: number;
  /** حامی */
  sponsor: DonateSponsorModel;
  virtual_Sponsor: DonateSponsorModel;
  /** مبلغ پرداخت */
  payment: number;
}
