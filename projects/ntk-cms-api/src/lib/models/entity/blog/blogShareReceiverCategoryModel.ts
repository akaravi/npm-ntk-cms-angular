
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogShareServerCategoryModel } from './blogShareServerCategoryModel';

export class BlogShareReceiverCategoryModel extends BaseModuleEntity<number> {
  fromDate?: Date;
  linkShareReciverCategoryId: number;
  linkShareServerCategoryId: number;
  expireDate?: Date;
  shareServerCategory: BlogShareServerCategoryModel;
  shareReciverCategory: BlogCategoryModel;
}
