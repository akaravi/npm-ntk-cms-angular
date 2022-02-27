import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyShareMainAdminSettingModel } from './biographyShareMainAdminSettingModel';
import { BiographyShareReceiverCategoryModel } from './biographyShareReceiverCategoryModel';

export class BiographyShareServerCategoryModel extends BaseModuleEntity<number> {
  Description:string;
  LinkShareMainAdminSettingId:number;
  Title:string;
  LinkServerCategoryId:number;
  ServerCategory:BiographyCategoryModel;
  ShareMainAdminSetting:BiographyShareMainAdminSettingModel;
  ShareReciverCategories:BiographyShareReceiverCategoryModel[];
}
