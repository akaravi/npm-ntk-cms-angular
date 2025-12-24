import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی محتوای وبلاگ
 */
export class BlogContentCategoryModel extends BaseModuleEntity<number> {
  /** محتوا */
  content: BlogContentModel;
  /** دسته‌بندی */
  category: BlogCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** لینک به شناسه محتوا */
  linkContentId: number;
}
