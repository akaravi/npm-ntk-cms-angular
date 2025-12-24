import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementCategoryModel } from './linkManagementCategoryModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
/**
 * دسته‌بندی هدف مدیریت لینک
 */
export class LinkManagementTargetCategoryModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_Category: LinkManagementCategoryModel;
  /** دسته‌بندی */
  category: LinkManagementCategoryModel;
  /** لینک به شناسه هدف مدیریت لینک */
  linkManagementTargetId: number;
  // tslint:disable-next-line: variable-name
  virtual_Target: LinkManagementTargetModel;
  /** هدف */
  target: LinkManagementTargetModel;
}

