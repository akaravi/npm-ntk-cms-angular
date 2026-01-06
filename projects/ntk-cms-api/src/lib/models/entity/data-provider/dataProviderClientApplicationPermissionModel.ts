import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderClientApplicationModel } from './dataProviderClientApplicationModel';
import { DataProviderSourcePathModel } from './dataProviderSourcePathModel';
//@@tag-Version-2201011
/**
 * مدل دسترسی اپلیکیشن کلاینت به مسیر Source
 * این مدل ارتباط N2N بین DataProviderClientApplication و DataProviderSourcePath را برقرار می‌کند
 */
export class DataProviderClientApplicationPermissionModel extends BaseModuleEntity<string> {
  /** لینک به شناسه اپلیکیشن کلاینت */
  linkClientApplicationId: string;
  /** اپلیکیشن کلاینت (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ClientApplication: DataProviderClientApplicationModel;
  /** لینک به شناسه مسیر Source */
  linkSourcePathId: string;
  /** مسیر Source (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_SourcePath: DataProviderSourcePathModel;
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

