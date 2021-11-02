import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingDetailModel } from './linkManagementAccountingDetailModel';
import { LinkManagementMemberModel } from './linkManagementMemberModel';

export class LinkManagementAccountingModel extends BaseModuleEntity<number> {
  BeginDate: Date;
  EndDate?: Date;
  LinkManagementMemberId: number;
  IsCertainDocument: boolean;
  // tslint:disable-next-line: variable-name
  virtual_ManagementMember: LinkManagementMemberModel;
  ManagementMember: LinkManagementMemberModel;
  Debtor: number;
  Creditor: number;
  Description: string;
  Notes: string;
  AccountingDetail: LinkManagementAccountingDetailModel;
}
