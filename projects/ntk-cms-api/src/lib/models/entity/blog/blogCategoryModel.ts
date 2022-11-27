import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentCategoryModel } from './blogContentCategoryModel';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
export class BlogCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: BlogCategoryModel[];
  category: BlogCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BlogCategoryModel;
  contents: BlogContentModel[];
  contentCategores: BlogContentCategoryModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;






}
