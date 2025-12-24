import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
/**
 * مدل دسترسی مسیر API پیامک
 */
export class SmsMainApiPathPermissionModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
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
  /** مسیر API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  /** مسیر API */
  apiPath: SmsMainApiPathModel;
}
