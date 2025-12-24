import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
/**
 * مدل کمپانی مسیر API پیامک
 */
export class SmsMainApiPathCompanyModel extends BaseModuleEntity<string> {
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
  /** آخرین تاریخ ویرایش اعتبار سرویس */
  serviceCreditLastEdit: Date;
  /** آخرین تاریخ ویرایش اعتبار کاربر */
  userCreditLastEdit: Date;
  /** لیست مسیرهای API */
  apiPaths: SmsMainApiPathModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
