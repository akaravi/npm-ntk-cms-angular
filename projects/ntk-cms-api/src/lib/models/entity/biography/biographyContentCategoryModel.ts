import { BiographyCategoryModel } from './biographyCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyContentCategoryModel extends BaseModuleEntity<number> {
  content: BiographyContentModel;
  category: BiographyCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
