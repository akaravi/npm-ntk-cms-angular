import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementCategoryModel } from './linkManagementCategoryModel';
//@@tag-Version-2201011
/**
 * دسته‌بندی بیلبورد مدیریت لینک
 */
export class LinkManagementBillboardCategoryModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_Category: LinkManagementCategoryModel;
  /** دسته‌بندی */
  category: LinkManagementCategoryModel;
  /** لینک به شناسه بیلبورد مدیریت لینک */
  linkManagementBillboardId: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  /** بیلبورد */
  billboard: LinkManagementBillboardModel;
}

