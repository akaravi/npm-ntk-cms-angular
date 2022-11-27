import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetCategoryModel } from './linkManagementTargetCategoryModel';
//@@tag-Version-2201011
export class LinkManagementBillboardTargetCategoryModel extends BaseModuleEntity<number> {
  linkTargetCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: LinkManagementTargetCategoryModel;
  targetCategory: LinkManagementTargetCategoryModel;
  linkManagementBillboardId: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  billboard: LinkManagementBillboardModel;
}
