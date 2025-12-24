import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';
//@@tag-Version-2201011
/**
 * مدل دسترسی شماره API پیامک
 */
export class SmsMainApiNumberPermissionModel extends BaseModuleEntity<string> {
  /** لینک به شناسه شماره API */
  linkApiNumberId: string;
  /** لینک به شناسه کاربر اصلی */
  linkCoreUserId?: number;
  /** لینک به شناسه سایت اصلی */
  linkCoreSiteId?: number;
  /** لینک به شناسه گروه کاربر اصلی */
  linkCoreUserGroupId?: number;
  /** لینک به شناسه دسته‌بندی سایت اصلی */
  linkCoreSiteCategoryId?: number;
  /** دسترسی دارد */
  hasAccess: boolean;
  /** دارای ارث‌بری است */
  hasInherits: boolean;
  /** از تاریخ */
  fromDate: Date;
  /** تاریخ انقضا */
  expireDate: Date;
  /** وضعیت دسترسی */
  accessStatus: number;
  /** نوع عملیات */
  action: number;
  /** شماره API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiNumber: SmsMainApiNumberModel;
  /** شماره API */
  apiNumber: SmsMainApiNumberModel;
}
