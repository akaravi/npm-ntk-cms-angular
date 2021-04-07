import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleTagModel } from './coreModuleTagModel';

export class CoreModuleTagCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Category: CoreModuleTagCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: CoreModuleTagCategoryModel;
  Children: CoreModuleTagCategoryModel[];
  Tags: CoreModuleTagModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
