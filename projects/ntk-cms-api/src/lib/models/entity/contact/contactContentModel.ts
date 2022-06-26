import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactCategoryModel } from './contactCategoryModel';


export class ContactContentModel extends BaseModuleEntity<string> {

  title: string;
  numbers: string;

  // tslint:disable-next-line: variable-name
  virtual_Category: ContactCategoryModel;
  category: ContactCategoryModel;

  linkCategoryId?: string;

  linkMainImageId?: number;
  linkMainImageIdSrc: string;

}
