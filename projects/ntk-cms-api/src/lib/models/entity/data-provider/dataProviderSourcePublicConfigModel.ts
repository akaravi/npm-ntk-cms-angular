import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourcePathModel } from './dataProviderSourcePathModel';
//@@tag-Version-2201011
/**
 * مدل تنظیمات عمومی منبع API ارائه‌دهنده داده
 */
export class DataProviderSourcePublicConfigModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** نام کلاس */
  className: string;
  /** آدرس URL وب سرویس */
  webServiceUrl: string;
  /** تنظیمات عمومی */
  publicConfigJsonValues: string;
  /** قابلیت دریافت وضعیت */
  abilityDelivery: boolean;
  /** قابلیت دریافت پیام */
  abilityReceive: boolean;
  /** قابلیت بررسی اعتبار */
  abilityCreditCheck: boolean;
  /** یادداشت */
  memo: string;
  /** لیست تنظیمات خصوصی سایت */
  privateSiteConfigs: DataProviderSourcePathModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}

