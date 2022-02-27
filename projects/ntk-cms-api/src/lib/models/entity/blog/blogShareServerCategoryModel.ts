import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogShareMainAdminSettingModel } from './blogShareMainAdminSettingModel';
import { BlogShareReceiverCategoryModel } from './blogShareReceiverCategoryModel';

export class BlogShareServerCategoryModel extends BaseModuleEntity<number> {
  Description:string;
  LinkShareMainAdminSettingId:number;
  Title:string;
  LinkServerCategoryId:number;
  ServerCategory:BlogCategoryModel;
  ShareMainAdminSetting:BlogShareMainAdminSettingModel;
  ShareReciverCategories:BlogShareReceiverCategoryModel[];
}
