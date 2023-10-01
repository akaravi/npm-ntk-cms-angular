import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
export class LinkManagementCategoryModel extends BaseModuleEntity<number> {
  title: string;
  linkMainImageId?: number;
  description: string;
  fontIcon: string;
  linkParentId?: number;
  // tslint:disable-next-line: variable-name
  virtual_TargetCategory: LinkManagementCategoryModel;
  targetCategory: LinkManagementCategoryModel;
  children: LinkManagementCategoryModel[];
  linkMainImageIdSrc: string;
}
