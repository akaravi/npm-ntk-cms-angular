import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactCategoryModel } from './contactCategoryModel';
import { ContactContentCategoryModel } from './contactContentCategoryModel';
//@@tag-Version-2201011
export class ContactContentModel extends BaseModuleEntity<string> {
  title: string;
  firstName: string;
  lastName: string;
  numbers: string;
  countNumber: number;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  numberHidden: boolean;
  contentCategores: ContactContentCategoryModel[];
}
