import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathPaginationModel } from './smsMainApiPathPaginationModel';
//@@tag-Version-2201011
/**
 * مدل سرویس قیمت مسیر API پیامک
 */
export class SmsMainApiPathPricePermissionModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** لینک به شناسه مسیر API */
  linkApiPathPaginationId: string;
  /** لینک به شناسه کاربر اصلی */
  linkCoreUserId?: number;
  /** لینک به شناسه سایت اصلی */
  linkCoreSiteId?: number;
  /** لینک به شناسه گروه کاربر اصلی */
  linkCoreUserGroupId?: number;
  /** لینک به شناسه دسته‌بندی سایت اصلی */
  linkCoreSiteCategoryId?: number;
  /** قیمت فروش به کاربر نهایی به ازای هر صفحه */
  endUserPricePerPage: number;
  /** هزینه بر اساس تحویل برای کاربر نهایی */
  endUserDeliveryCostBase: boolean;
  // tslint:disable-next-line: variable-name
  virtual_ApiPathPagination: SmsMainApiPathPaginationModel;
  /** مسیر API */
  apiPathPagination: SmsMainApiPathPaginationModel;
}
