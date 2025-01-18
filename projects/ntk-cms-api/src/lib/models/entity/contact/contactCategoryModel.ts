
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactContentModel } from './contactContentModel';
//@@tag-Version-2201011
export class ContactCategoryModel extends BaseModuleEntity<string> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  contentCountNumber:number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: string;
  children: ContactCategoryModel[];
  category: ContactCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ContactCategoryModel;
  contents: ContactContentModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
