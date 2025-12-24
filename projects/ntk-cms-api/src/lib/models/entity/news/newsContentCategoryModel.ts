import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsContentModel } from './newsContentModel';
//@@tag-Version-2201011
/**
 * دسته‌بندی محتوای اخبار
 */
export class NewsContentCategoryModel extends BaseModuleEntity<number> {
  /** محتوا */
  content: NewsContentModel;
  /** دسته‌بندی */
  category: NewsCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** لینک به شناسه محتوا */
  linkContentId: number;
}
