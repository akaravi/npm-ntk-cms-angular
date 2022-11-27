
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleShareServerCategoryModel } from './articleShareServerCategoryModel';
//@@tag-Version-2201011
export class ArticleShareReceiverCategoryModel extends BaseModuleEntity<number> {
  fromDate?: Date;
  linkShareReciverCategoryId: number;
  linkShareServerCategoryId: number;
  expireDate?: Date;
  shareServerCategory: ArticleShareServerCategoryModel;
  shareReciverCategory: ArticleCategoryModel;
  
}
