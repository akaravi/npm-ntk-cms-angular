import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetModel } from './donateTargetModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی هدف اهدا
 */
export class DonateTargetCategoryModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** لینک به شناسه والد */
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: DonateTargetCategoryModel;
  /** دسته‌بندی والد */
  targetCategory: DonateTargetCategoryModel;
  /** فرزندان */
  children: DonateTargetCategoryModel[];
  /** لیست اهداف */
  targets: DonateTargetModel[];
  /** لیست حامیان */
  sponsors: DonateSponsorModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
