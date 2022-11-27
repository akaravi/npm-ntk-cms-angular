import { ArticleCategoryModel } from './articleCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
export class ArticleContentCategoryModel extends BaseModuleEntity<number> {
  content: ArticleContentModel;
  category: ArticleCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
