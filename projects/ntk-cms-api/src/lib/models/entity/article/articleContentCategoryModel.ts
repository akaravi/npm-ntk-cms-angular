import { ArticleCategoryModel } from './articleCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';

export class ArticleContentCategoryModel extends BaseModuleEntity<number> {
  content: ArticleContentModel;
  category: ArticleCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
