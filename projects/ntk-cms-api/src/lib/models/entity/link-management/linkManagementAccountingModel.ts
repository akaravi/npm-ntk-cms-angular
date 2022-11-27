import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingDetailModel } from './linkManagementAccountingDetailModel';
import { LinkManagementMemberModel } from './linkManagementMemberModel';
//@@tag-Version-2201011
export class LinkManagementAccountingModel extends BaseModuleEntity<number> {
  beginDate: Date;
  endDate?: Date;
  linkManagementMemberId: number;
  isCertainDocument: boolean;
  // tslint:disable-next-line: variable-name
  virtual_ManagementMember: LinkManagementMemberModel;
  managementMember: LinkManagementMemberModel;
  debtor: number;
  creditor: number;
  description: string;
  notes: string;
  accountingDetail: LinkManagementAccountingDetailModel;
}
