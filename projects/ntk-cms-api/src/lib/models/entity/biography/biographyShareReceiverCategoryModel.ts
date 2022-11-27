
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyShareServerCategoryModel } from './biographyShareServerCategoryModel';
//@@tag-Version-2201011
export class BiographyShareReceiverCategoryModel extends BaseModuleEntity<number> {
  fromDate?: Date;
  linkShareReciverCategoryId: number;
  linkShareServerCategoryId: number;
  expireDate?: Date;
  shareServerCategory: BiographyShareServerCategoryModel;
  shareReciverCategory: BiographyCategoryModel;
}
