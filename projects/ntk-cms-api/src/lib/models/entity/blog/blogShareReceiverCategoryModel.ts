
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogShareServerCategoryModel } from './blogShareServerCategoryModel';

export class BlogShareReceiverCategoryModel extends BaseModuleEntity<number> {
  FromDate?: Date;
  LinkShareReciverCategoryId: number;
  LinkShareServerCategoryId: number;
  ExpireDate?: Date;
  ShareServerCategory: BlogShareServerCategoryModel;
  ShareReciverCategory: BlogCategoryModel;
}
