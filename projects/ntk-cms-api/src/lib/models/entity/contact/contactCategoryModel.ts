
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactContentCategoryModel } from './contactContentCategoryModel';
import { ContactContentModel } from './contactContentModel';
//@@tag-Version-2201011
export class ContactCategoryModel extends BaseModuleEntity<string> {
  title: string;
  titleResourceLanguage: string;

  contentCount: number;
  contentCountNumber: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: string;
  children: ContactCategoryModel[];
  ContentCategores: ContactContentCategoryModel[];

  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  numberHidden: boolean;
}
