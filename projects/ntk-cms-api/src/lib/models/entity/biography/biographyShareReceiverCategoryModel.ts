
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyCategoryModel } from './biographyCategoryModel';
import { BiographyShareServerCategoryModel } from './biographyShareServerCategoryModel';

export class BiographyShareReceiverCategoryModel extends BaseModuleEntity<number> {
  FromDate?: Date;
  LinkShareReciverCategoryId: number;
  LinkShareServerCategoryId: number;
  ExpireDate?: Date;
  ShareServerCategory: BiographyShareServerCategoryModel;
  ShareReciverCategory: BiographyCategoryModel;
}
