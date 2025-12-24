import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی محتوای مقاله
 */
export class ArticleContentCategoryModel extends BaseModuleEntity<number> {
  /** محتوا */
  content: ArticleContentModel;
  /** دسته‌بندی */
  category: ArticleCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** لینک به شناسه محتوا */
  linkContentId: number;
}
