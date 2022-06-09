import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetCategoryModel } from './linkManagementTargetCategoryModel';

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
