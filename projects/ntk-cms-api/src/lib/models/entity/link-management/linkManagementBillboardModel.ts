import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardPatternModel } from './linkManagementBillboardPatternModel';
import { LinkManagementBillboardTargetCategoryModel } from './linkManagementBillboardTargetCategoryModel';
import { LinkManagementMemberModel } from './linkManagementMemberModel';

export class LinkManagementBillboardModel extends BaseModuleEntity<number> {
  Title: string;
  bgColor: string;
  CurrentClickCount: number;
  CurrentViewCount: number;
  FromDate?: Date;
  LinkMainImageId?: number;
  LinkFileIds: string;
  LinkManagementMemberId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Member: LinkManagementMemberModel;
  Member: LinkManagementMemberModel;
  LinkBillboardPatternId: number;
  // tslint:disable-next-line: variable-name
  virtual_BillboardPattern: LinkManagementBillboardPatternModel;
  BillboardPattern: LinkManagementBillboardPatternModel;
  BillboardTargetCategories: LinkManagementBillboardTargetCategoryModel[];
  LinkMainImageIdSrc: string;
  LinkFileIdsSrc: string[];
  BillboardScript: string;

}
