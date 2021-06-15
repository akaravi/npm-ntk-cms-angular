import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentCategoryModel } from './blogContentCategoryModel';
import { BlogContentModel } from './blogContentModel';

export class BlogCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: BlogCategoryModel[];
  Category: BlogCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BlogCategoryModel;
  Contents: BlogContentModel[];
  ContentCategores: BlogContentCategoryModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;






}
