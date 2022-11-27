import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleTagModel } from './coreModuleTagModel';
//@@tag-Version-2201011
export class CoreModuleTagCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  category: CoreModuleTagCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: CoreModuleTagCategoryModel;
  children: CoreModuleTagCategoryModel[];
  tags: CoreModuleTagModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
