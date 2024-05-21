import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogCategoryModel } from './blogCategoryModel';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
export class BlogContentCategoryModel extends BaseModuleEntity<number> {
  content: BlogContentModel;
  category: BlogCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
