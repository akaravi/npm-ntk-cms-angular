import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogShareMainAdminSettingModel } from './blogShareMainAdminSettingModel';
import { BlogShareReceiverCategoryModel } from './blogShareReceiverCategoryModel';

export class BlogShareServerCategoryModel extends BaseModuleEntity<number> {
  description:string;
  linkShareMainAdminSettingId:number;
  title:string;
  linkServerCategoryId:number;
  serverCategory:BlogCategoryModel;
  shareMainAdminSetting:BlogShareMainAdminSettingModel;
  shareReciverCategories:BlogShareReceiverCategoryModel[];
}
