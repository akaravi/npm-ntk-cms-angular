import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
/**
 * مدل تنظیمات عمومی مسیر API پیامک
 */
export class SmsMainApiPathPublicConfigModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** نام کلاس */
  className: string;
  /** آدرس URL وب سرویس */
  webServiceUrl: string;
  /** تنظیمات عمومی به صورت JSON */
  publicConfigJsonValues: string;
  /** یادداشت */
  memo: string;
  /** قابلیت بررسی اعتبار */
  abilityCreditCheck: boolean;
  /** قابلیت دریافت وضعیت */
  abilityDelivery: boolean;
  /** قابلیت دریافت پیام */
  abilityReceive: boolean;
  /** لیست تنظیمات خصوصی سایت */
  privateSiteConfigs: SmsMainApiPathModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
