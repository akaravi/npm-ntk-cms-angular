
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleShareServerCategoryModel } from './articleShareServerCategoryModel';

export class ArticleShareReceiverCategoryModel extends BaseModuleEntity<number> {
  fromDate?: Date;
  linkShareReciverCategoryId: number;
  linkShareServerCategoryId: number;
  expireDate?: Date;
  shareServerCategory: ArticleShareServerCategoryModel;
  shareReciverCategory: ArticleCategoryModel;
}
