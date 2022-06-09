import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyShareMainAdminSettingModel } from './biographyShareMainAdminSettingModel';
import { BiographyShareReceiverCategoryModel } from './biographyShareReceiverCategoryModel';

export class BiographyShareServerCategoryModel extends BaseModuleEntity<number> {
  description:string;
  linkShareMainAdminSettingId:number;
  title:string;
  linkServerCategoryId:number;
  serverCategory:BiographyCategoryModel;
  shareMainAdminSetting:BiographyShareMainAdminSettingModel;
  shareReciverCategories:BiographyShareReceiverCategoryModel[];
}
