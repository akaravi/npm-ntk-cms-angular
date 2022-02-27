
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleShareServerCategoryModel } from './articleShareServerCategoryModel';

export class ArticleShareReceiverCategoryModel extends BaseModuleEntity<number> {
  FromDate?: Date;
  LinkShareReciverCategoryId: number;
  LinkShareServerCategoryId: number;
  ExpireDate?: Date;
  ShareServerCategory: ArticleShareServerCategoryModel;
  ShareReciverCategory: ArticleCategoryModel;
}
