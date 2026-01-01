import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanSourceModel } from './dataProviderPlanSourceModel';
import { DataProviderSourceCompanyModel } from './dataProviderSourceCompanyModel';
//@@tag-Version-2201011
/**
 * مدل منبع ارائه‌دهنده داده
 */
export class DataProviderSourceModel extends BaseModuleEntity<string> {
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

  /** ارتباط با جدول کمپانی */
  linkSourceCompanyId: string;

  /** اگر روشن : کانتر کمپانی اعمال میشود */
  sourceCompanyCounterIsOn: boolean;

  /** شرکت منبع */
  virtual_SourceCompany: DataProviderSourceCompanyModel;
}
