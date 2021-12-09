import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentCategoryModel } from './chartContentCategoryModel';
import { ChartContentModel } from './chartContentModel';

export class ChartCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  ContentCount: number;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: ChartCategoryModel[];
  Category: ChartCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ChartCategoryModel;
  Contents: ChartContentModel[];
  ContentCategores: ChartContentCategoryModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
