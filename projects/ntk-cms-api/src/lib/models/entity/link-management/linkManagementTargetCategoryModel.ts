import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
import { LinkManagementCategoryModel } from './linkManagementCategoryModel';
//@@tag-Version-2201011
export class LinkManagementTargetCategoryModel extends BaseModuleEntity<number> {
  linkCategoryId: number;
  // tslint:disable-next-line: variable-name
  virtual_Category: LinkManagementCategoryModel;
  category: LinkManagementCategoryModel;
  linkManagementTargetId: number;
  // tslint:disable-next-line: variable-name
  virtual_Target: LinkManagementTargetModel;
  target: LinkManagementTargetModel;
}

