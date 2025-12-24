import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyContentModel } from './biographyContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی محتوای زندگینامه
 */
export class BiographyContentCategoryModel extends BaseModuleEntity<number> {
  /** محتوا */
  content: BiographyContentModel;
  /** دسته‌بندی */
  category: BiographyCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** لینک به شناسه محتوا */
  linkContentId: number;
}
