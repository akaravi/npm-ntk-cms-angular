import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactCategoryModel } from './contactCategoryModel';
//@@tag-Version-2201011
export class ContactContentModel extends BaseModuleEntity<string> {

  title: string;
  numbers: string;
  CountNumber:number;
  // tslint:disable-next-line: variable-name
  virtual_Category: ContactCategoryModel;
  category: ContactCategoryModel;

  linkCategoryId?: string;

  linkMainImageId?: number;
  linkMainImageIdSrc: string;

}
