import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsShareMainAdminSettingModel } from './newsShareMainAdminSettingModel';
import { NewsShareReceiverCategoryModel } from './newsShareReceiverCategoryModel';

export class NewsShareServerCategoryModel extends BaseModuleEntity<number> {
  description:string;
  linkShareMainAdminSettingId:number;
  title:string;
  linkServerCategoryId:number;
  serverCategory:NewsCategoryModel;
  shareMainAdminSetting:NewsShareMainAdminSettingModel;
  shareReciverCategories:NewsShareReceiverCategoryModel[];
}
