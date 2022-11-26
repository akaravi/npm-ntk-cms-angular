import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentCategoryModel } from './newsContentCategoryModel';
import { NewsContentModel } from './newsContentModel';
//@@tag-Version-2201011
export class NewsCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: NewsCategoryModel[];
  category: NewsCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: NewsCategoryModel;
  contents: NewsContentModel[];
  contentCategores: NewsContentCategoryModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
