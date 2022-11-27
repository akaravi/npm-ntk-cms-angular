import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleTagCategoryModel } from './coreModuleTagCategoryModel';
//@@tag-Version-2201011
export class CoreModuleTagModel extends BaseModuleEntity<number> {
  title: string;
  linkCategoryId: number;
  category: CoreModuleTagCategoryModel;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
