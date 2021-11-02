import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardTargetCategoryModel } from './linkManagementBillboardTargetCategoryModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';

export class LinkManagementTargetCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  LinkMainImageId?: number;
  Description: string;
  FontIcon: string;
  LinkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: LinkManagementTargetCategoryModel;
  TargetCategory: LinkManagementTargetCategoryModel;
  Children: LinkManagementTargetCategoryModel[];
  Target: LinkManagementTargetModel[];
  BillboardTargetCategory: LinkManagementBillboardTargetCategoryModel[];
  LinkMainImageIdSrc: string;
}
