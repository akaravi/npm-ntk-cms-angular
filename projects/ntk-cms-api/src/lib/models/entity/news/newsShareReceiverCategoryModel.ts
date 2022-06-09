
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsShareServerCategoryModel } from './newsShareServerCategoryModel';

export class NewsShareReceiverCategoryModel extends BaseModuleEntity<number> {
  fromDate?: Date;
  linkShareReciverCategoryId: number;
  linkShareServerCategoryId: number;
  expireDate?: Date;
  shareServerCategory: NewsShareServerCategoryModel;
  shareReciverCategory: NewsCategoryModel;
}
