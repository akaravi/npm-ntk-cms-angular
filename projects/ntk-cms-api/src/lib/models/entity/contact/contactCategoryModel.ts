
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactContentModel } from './contactContentModel';

export class ContactCategoryModel extends BaseModuleEntity<number>  {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: ContactCategoryModel[];
  category: ContactCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ContactCategoryModel;
  contents: ContactContentModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
