import { BaseEntity } from '../base/baseEntity';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleTagCategoryModel } from './coreModuleTagCategoryModel';


export class CoreModuleTagModel extends BaseModuleEntity<number> {
  title: string;
  linkCategoryId: number;
  category: CoreModuleTagCategoryModel;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
