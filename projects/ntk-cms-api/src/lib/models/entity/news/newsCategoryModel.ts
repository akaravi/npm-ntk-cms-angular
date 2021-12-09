import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentCategoryModel } from './newsContentCategoryModel';
import { NewsContentModel } from './newsContentModel';

export class NewsCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  ContentCount: number;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: NewsCategoryModel[];
  Category: NewsCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: NewsCategoryModel;
  Contents: NewsContentModel[];
  ContentCategores: NewsContentCategoryModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
