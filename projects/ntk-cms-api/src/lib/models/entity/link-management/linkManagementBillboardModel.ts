import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardCategoryModel } from './linkManagementBillboardCategoryModel';
import { LinkManagementBillboardPatternModel } from './linkManagementBillboardPatternModel';

import { LinkManagementMemberModel } from './linkManagementMemberModel';
//@@tag-Version-2201011
export class LinkManagementBillboardModel extends BaseModuleEntity<number> {
  title: string;
  bgColor: string;
  currentClickCount: number;
  currentViewCount: number;
  fromDate?: Date;
  linkMainImageId?: number;
  linkFileIds: string;
  linkManagementMemberId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Member: LinkManagementMemberModel;
  member: LinkManagementMemberModel;
  linkBillboardPatternId: number;
  // tslint:disable-next-line: variable-name
  virtual_BillboardPattern: LinkManagementBillboardPatternModel;
  billboardPattern: LinkManagementBillboardPatternModel;
  billboardCategories: LinkManagementBillboardCategoryModel[];
  linkMainImageIdSrc: string;
  linkFileIdsSrc: string[];
  billboardScript: string;

}
