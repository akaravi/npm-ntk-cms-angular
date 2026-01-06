import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourceModel } from './dataProviderSourceModel';
//@@tag-Version-2201011
/**
 * مدل کمپانی منبع ارائه‌دهنده داده
 */
export class DataProviderSourceCompanyModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** بررسی اعتبار */
  checkCredit: boolean;
  /** محاسبه اعتبار */
  calculateCredit: boolean;
  /** اعتبار موجود سرویس */
  serviceAvailableCredit: number;
  /** مجموع اعتبار سرویس */
  serviceSumCredit: number;
  /** اعتبار موجود کاربر */
  userAvailableCredit: number;
  /** مجموع اعتبار کاربر */
  userSumCredit: number;
  /** لیست منابع داده */
  sources: DataProviderSourceModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}

