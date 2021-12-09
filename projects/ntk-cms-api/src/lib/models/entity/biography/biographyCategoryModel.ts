import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentCategoryModel } from './biographyContentCategoryModel';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  ContentCount: number;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: BiographyCategoryModel[];
  Category: BiographyCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BiographyCategoryModel;
  Contents: BiographyContentModel[];
  ContentCategores: BiographyContentCategoryModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;






}
