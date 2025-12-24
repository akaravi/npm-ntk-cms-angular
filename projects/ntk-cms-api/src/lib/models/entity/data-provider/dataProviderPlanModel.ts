import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanCategoryModel } from './dataProviderPlanCategoryModel';
import { DataProviderPlanClientModel } from './dataProviderPlanClientModel';
import { DataProviderPlanPriceModel } from './dataProviderPlanPriceModel';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';
//@@tag-Version-2201011
/**
 * مدل پلن ارائه‌دهنده داده
 */
export class DataProviderPlanModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** لینک به شناسه دسته‌بندی پلن */
  linkPlanCategoryId: number;
  /** دسته‌بندی پلن */
  planCategory: DataProviderPlanCategoryModel;
  virtual_PlanCategory: DataProviderPlanCategoryModel;
  /** لیست کلاینت‌های پلن */
  planClients: DataProviderPlanClientModel[];
  /** لیست منبع‌های پلن */
  planSources: DataProviderPlanSourceModel[];
  /** لیست قیمت‌های پلن */
  planPrices: DataProviderPlanPriceModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
