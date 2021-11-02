import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetCategoryModel } from './linkManagementTargetCategoryModel';

export class LinkManagementBillboardTargetCategoryModel extends BaseModuleEntity<number> {
  LinkTargetCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: LinkManagementTargetCategoryModel;
  TargetCategory: LinkManagementTargetCategoryModel;
  LinkManagementBillboardId: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  Billboard: LinkManagementBillboardModel;
}
