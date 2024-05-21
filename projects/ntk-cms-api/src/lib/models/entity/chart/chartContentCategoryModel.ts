import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartCategoryModel } from './chartCategoryModel';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
export class ChartContentCategoryModel extends BaseModuleEntity<number> {
  content: ChartContentModel;
  category: ChartCategoryModel;
  linkCategoryId: number;
  linkContentId: number;
}
