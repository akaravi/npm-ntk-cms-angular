import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsShareMainAdminSettingModel } from './newsShareMainAdminSettingModel';
import { NewsShareReceiverCategoryModel } from './newsShareReceiverCategoryModel';

export class NewsShareServerCategoryModel extends BaseModuleEntity<number> {
  Description:string;
  LinkShareMainAdminSettingId:number;
  Title:string;
  LinkServerCategoryId:number;
  ServerCategory:NewsCategoryModel;
  ShareMainAdminSetting:NewsShareMainAdminSettingModel;
  ShareReciverCategories:NewsShareReceiverCategoryModel[];
}
