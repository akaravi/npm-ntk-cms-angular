import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactCategoryModel } from './contactCategoryModel';
import { ContactContentModel } from './contactContentModel';
//@@tag-Version-2201011
export class ContactContentCategoryModel extends BaseModuleEntity<string> {
  content: ContactContentModel;
  category: ContactCategoryModel;
  linkCategoryId: string;
  linkContentId: string;
}
