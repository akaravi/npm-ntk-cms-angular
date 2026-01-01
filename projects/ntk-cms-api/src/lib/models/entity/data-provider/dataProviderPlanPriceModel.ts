import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderPlanModel } from './dataProviderPlanModel';
//@@tag-Version-2201011
/**
 * مدل قیمت پلن ارائه‌دهنده داده
 */
export class DataProviderPlanPriceModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** تعداد روز دوره */
  periodDay: number;
  /** قیمت */
  price: number;
  /** لینک به شناسه پلن */
  linkPlanId: string;
  /** پلن */
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;

}
