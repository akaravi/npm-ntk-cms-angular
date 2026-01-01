import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderSourcePathPaginationModel } from './dataProviderSourcePathPaginationModel';
//@@tag-Version-2201011
/**
 * مدل دسترسی قیمت مسیر API ارائه‌دهنده داده
 */
export class DataProviderSourcePathPricePermissionModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** لینک به شناسه تعرفه مسیر Source */
  linkSourcePathPaginationId: string;
  /** لینک به شناسه کاربر اصلی */
  linkCoreUserId?: number;
  /** لینک به شناسه سایت اصلی */
  linkCoreSiteId?: number;
  /** لینک به شناسه گروه کاربر اصلی */
  linkCoreUserGroupId?: number;
  /** لینک به شناسه دسته‌بندی سایت اصلی */
  linkCoreSiteCategoryId?: number;
  /** هزینه بر اساس تحویل برای کاربر نهایی */
  endUserDeliveryCostBase: boolean;
  /** قیمت فروش به ازای هر صفحه */
  endUserPricePerPage: number;
  /** تعرفه مسیر Source (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_SourcePathPagination: DataProviderSourcePathPaginationModel;
  /** تعرفه مسیر Source */
  sourcePathPagination: DataProviderSourcePathPaginationModel;
}

