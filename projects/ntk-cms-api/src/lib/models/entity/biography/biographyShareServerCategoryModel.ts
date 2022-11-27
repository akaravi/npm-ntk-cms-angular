import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyShareMainAdminSettingModel } from './biographyShareMainAdminSettingModel';
import { BiographyShareReceiverCategoryModel } from './biographyShareReceiverCategoryModel';
//@@tag-Version-2201011
export class BiographyShareServerCategoryModel extends BaseModuleEntity<number> {
  description:string;
  linkShareMainAdminSettingId:number;
  title:string;
  linkServerCategoryId:number;
  serverCategory:BiographyCategoryModel;
  shareMainAdminSetting:BiographyShareMainAdminSettingModel;
  shareReciverCategories:BiographyShareReceiverCategoryModel[];
}
