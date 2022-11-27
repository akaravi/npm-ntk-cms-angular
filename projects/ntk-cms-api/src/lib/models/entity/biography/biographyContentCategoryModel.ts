import { BiographyCategoryModel } from './biographyCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';
//@@tag-Version-2201011
export class BiographyContentCategoryModel extends BaseModuleEntity<number> {
  content: BiographyContentModel;
  category: BiographyCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
