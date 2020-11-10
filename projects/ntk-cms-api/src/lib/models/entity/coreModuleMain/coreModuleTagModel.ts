import { BaseEntity } from '../base/baseEntity';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { CoreModuleTagCategoryModel } from './coreModuleTagCategoryModel';


export class CoreModuleTagModel extends BaseModuleEntity<number> {
  Title: string;
  LinkCategoryId: number;
  Category: CoreModuleTagCategoryModel;

}
