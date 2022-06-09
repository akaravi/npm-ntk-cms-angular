import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentCategoryModel } from './biographyContentCategoryModel';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: BiographyCategoryModel[];
  category: BiographyCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BiographyCategoryModel;
  contents: BiographyContentModel[];
  contentCategores: BiographyContentCategoryModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;






}
