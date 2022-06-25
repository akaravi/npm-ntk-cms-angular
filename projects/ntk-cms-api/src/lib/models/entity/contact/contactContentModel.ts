import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactCategoryModel } from './contactCategoryModel';


export class ContactContentModel extends BaseModuleEntity<number> {

  title: string;
  numbers: string;

  // tslint:disable-next-line: variable-name
  virtual_Category: ContactCategoryModel;
  category: ContactCategoryModel;

  linkCategoryId?: number;

  linkMainImageId?: number;
  linkMainImageIdSrc: string;

}
