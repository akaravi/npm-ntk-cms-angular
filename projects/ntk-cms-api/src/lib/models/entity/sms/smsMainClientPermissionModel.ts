import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل دسترسی کلاینت پیامک
 */
export class SmsMainClientPermissionModel extends BaseModuleEntity<string> {
  /** لینک به شناسه کاربر اصلی */
  linkCoreUserId: number;
  /** از تاریخ */
  fromDate: Date;
  /** تاریخ انقضا */
  expireDate: Date;
  /** توضیحات */
  description: string;
  /** کلید API */
  apiKey: string;
  /** آدرس IP های مجاز فایروال */
  firewallAllowIP: string;
  /** لیست آدرس IP های مجاز فایروال */
  firewallAllowIPList: string[] = [];
}
