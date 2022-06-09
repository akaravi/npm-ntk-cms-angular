import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';

export class DonateSponsorModel extends BaseModuleEntity<number> {
  title: string;
  linkCmsUserId: number;
  linkTargetCategoryId: number;
  targetCategory: DonateTargetCategoryModel;
  virtual_TargetCategory: DonateTargetCategoryModel;
  targetPeriodSponsors: DonateTargetPeriodSponsorModel[];
}
