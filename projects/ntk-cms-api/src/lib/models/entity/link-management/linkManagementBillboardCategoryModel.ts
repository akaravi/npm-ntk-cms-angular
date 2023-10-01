import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementCategoryModel } from './linkManagementCategoryModel';
//@@tag-Version-2201011
export class LinkManagementBillboardCategoryModel extends BaseModuleEntity<number> {
  linkCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_Category: LinkManagementCategoryModel;
  category: LinkManagementCategoryModel;
  linkManagementBillboardId: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  billboard: LinkManagementBillboardModel;
}

