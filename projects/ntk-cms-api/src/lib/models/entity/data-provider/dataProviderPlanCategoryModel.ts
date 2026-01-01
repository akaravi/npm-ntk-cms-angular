import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی پلن ارائه‌دهنده داده
 */
export class DataProviderPlanCategoryModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** لینک به شناسه والد */
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_PlanCategory: DataProviderPlanCategoryModel;
  /** دسته‌بندی والد */
  planCategory: DataProviderPlanCategoryModel;
  /** فرزندان */
  children: DataProviderPlanCategoryModel[];
  /** لیست پلن‌ها */
  plans: DataProviderPlanModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
