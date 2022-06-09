import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentCategoryModel } from './chartContentCategoryModel';
import { ChartContentModel } from './chartContentModel';

export class ChartCategoryModel extends BaseModuleEntity<number> {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: ChartCategoryModel[];
  category: ChartCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ChartCategoryModel;
  contents: ChartContentModel[];
  contentCategores: ChartContentCategoryModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
