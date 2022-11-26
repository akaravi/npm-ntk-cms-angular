import { NewsCategoryModel } from './newsCategoryModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';
//@@tag-Version-2201011
export class NewsContentCategoryModel extends BaseModuleEntity<number> {
  content: NewsContentModel;
  category: NewsCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
