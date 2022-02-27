
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsShareServerCategoryModel } from './newsShareServerCategoryModel';

export class NewsShareReceiverCategoryModel extends BaseModuleEntity<number> {
  FromDate?: Date;
  LinkShareReciverCategoryId?: number;
  LinkShareServerCategoryId?: number;
  ExpireDate?: Date;
  ShareServerCategory: NewsShareServerCategoryModel;
  ShareReciverCategory: NewsCategoryModel;
}
