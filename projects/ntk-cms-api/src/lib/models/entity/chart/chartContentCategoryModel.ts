import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartCategoryModel } from './chartCategoryModel';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی محتوای چارت
 */
export class ChartContentCategoryModel extends BaseModuleEntity<number> {
  /** محتوا */
  content: ChartContentModel;
  /** دسته‌بندی */
  category: ChartCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** لینک به شناسه محتوا */
  linkContentId: number;
}
