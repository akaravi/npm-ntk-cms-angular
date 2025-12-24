import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';
//@@tag-Version-2201011
/**
 * مدل حامی اهدا
 */
export class DonateSponsorModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** لینک به شناسه کاربر CMS */
  linkCmsUserId: number;
  /** لینک به شناسه دسته‌بندی هدف */
  linkTargetCategoryId: number;
  /** دسته‌بندی هدف */
  targetCategory: DonateTargetCategoryModel;
  virtual_TargetCategory: DonateTargetCategoryModel;
  /** لیست حامیان دوره هدف */
  targetPeriodSponsors: DonateTargetPeriodSponsorModel[];
}
