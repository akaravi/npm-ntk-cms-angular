import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';
//@@tag-Version-2201011
/**
 * مدل منبع ارائه‌دهنده داده
 */
export class DataProviderSourceModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** کد کلید */
  keyCode: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;

  /** لیست پلن‌های منبع */
  planSources: DataProviderPlanSourceModel[];
}
