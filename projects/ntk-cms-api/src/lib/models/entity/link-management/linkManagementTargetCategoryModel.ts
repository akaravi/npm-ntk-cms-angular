import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardTargetCategoryModel } from './linkManagementBillboardTargetCategoryModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';

export class LinkManagementTargetCategoryModel extends BaseModuleEntity<number> {
  title: string;
  linkMainImageId?: number;
  description: string;
  fontIcon: string;
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: LinkManagementTargetCategoryModel;
  targetCategory: LinkManagementTargetCategoryModel;
  children: LinkManagementTargetCategoryModel[];
  target: LinkManagementTargetModel[];
  billboardTargetCategory: LinkManagementBillboardTargetCategoryModel[];
  linkMainImageIdSrc: string;
}
