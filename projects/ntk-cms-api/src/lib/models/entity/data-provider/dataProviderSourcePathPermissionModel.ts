import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourcePathModel } from './dataProviderSourcePathModel';
//@@tag-Version-2201011
/**
 * مدل دسترسی مسیر Source DataProvider
 */
export class DataProviderSourcePathPermissionModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر Source */
  linkSourcePathId: string;
  /** مسیر Source (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_SourcePath: DataProviderSourcePathModel;
  /** لینک به شناسه کاربر اصلی */
  linkCoreUserId?: number;
  /** لینک به شناسه سایت اصلی */
  linkCoreSiteId?: number;
  /** لینک به شناسه گروه کاربر اصلی */
  linkCoreUserGroupId?: number;
  /** لینک به شناسه دسته‌بندی سایت اصلی */
  linkCoreSiteCategoryId?: number;
  /** دارای دسترسی است */
  hasAccess: boolean;
  /** دارای ارث‌بری است */
  hasInherits: boolean;
  /** از تاریخ */
  fromDate?: Date;
  /** تاریخ انقضا */
  expireDate?: Date;
  /** وضعیت دسترسی */
  accessStatus: number;
  /** نوع عملیات */
  action: number;
}

