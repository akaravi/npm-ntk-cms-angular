import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardPatternModel } from './linkManagementBillboardPatternModel';
import { LinkManagementBillboardTargetCategoryModel } from './linkManagementBillboardTargetCategoryModel';
import { LinkManagementMemberModel } from './linkManagementMemberModel';

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
  billboardTargetCategories: LinkManagementBillboardTargetCategoryModel[];
  linkMainImageIdSrc: string;
  linkFileIdsSrc: string[];
  billboardScript: string;

}
