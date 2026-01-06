import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainClientApplicationModel } from './smsMainClientApplicationModel';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
/**
 * مدل دسترسی اپلیکیشن کلاینت به مسیر API
 * این مدل ارتباط N2N بین SmsMainClientApplication و SmsMainApiPath را برقرار می‌کند
 */
export class SmsMainClientApplicationPermissionModel extends BaseModuleEntity<string> {
  /** لینک به شناسه اپلیکیشن کلاینت */
  linkClientApplicationId: string;
  /** اپلیکیشن کلاینت (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ClientApplication: SmsMainClientApplicationModel;
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** مسیر API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  /** درخواست کاربر برای دسترسی به مسیر */
  isRequested: boolean;
  /** تایید دسترسی توسط مدیریت */
  isApproved: boolean;
  /** تاریخ شروع دسترسی */
  fromDate: Date;
  /** تاریخ انقضای دسترسی */
  expireDate: Date;
  /** توضیحات */
  description: string;
}

