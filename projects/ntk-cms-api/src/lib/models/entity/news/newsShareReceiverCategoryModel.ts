
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsShareServerCategoryModel } from './newsShareServerCategoryModel';
//@@tag-Version-2201011
export class NewsShareReceiverCategoryModel extends BaseModuleEntity<number> {
  fromDate?: Date;
  linkShareReciverCategoryId: number;
  linkShareServerCategoryId: number;
  expireDate?: Date;
  shareServerCategory: NewsShareServerCategoryModel;
  shareReciverCategory: NewsCategoryModel;
}
