import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * نوع آگهی ملکی برای تعیین سطح نمایش، مدت و مبلغ آگهی.
 */
export class EstateAdsTypeModel extends BaseModuleEntity<string> {
  /** عنوان نوع آگهی. */
  title: string;
  /** توضیح کوتاه. */
  description: string;
  /** درآمد به حساب سایت مرجع ثبت شود. */
  paymentForMainSite: boolean;
  /** سطح/ایستگاه نمایش (ویژه/پیشنهادی/...). */
  stationLevel: number;
  /** درجه نمایش (سطح ستاره‌ای). */
  viewLevel: number;
  /** مدت اعتبار آگهی (روز). */
  dayOfActivity: number;
  /** مبلغ فروش آگهی. */
  salePrice: number;
  /** شناسه تصویر اصلی. */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;
  /** توضیحات سطح ایستگاه. */
  stationLevelDescription: string[];
  /** توضیحات سطح نمایش. */
  viewLevelDescription: string[];
}
