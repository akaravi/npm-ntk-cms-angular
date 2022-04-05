import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';

export class DonateSponsorModel extends BaseModuleEntity<number> {
  Title: string;
  LinkCmsUserId: number;
  LinkTargetCategoryId: number;
  TargetCategory: DonateTargetCategoryModel;
  virtual_TargetCategory: DonateTargetCategoryModel;
  TargetPeriodSponsors: DonateTargetPeriodSponsorModel[];
}
