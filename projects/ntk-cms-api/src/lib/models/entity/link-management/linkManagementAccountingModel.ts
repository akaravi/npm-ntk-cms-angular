import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingDetailModel } from './linkManagementAccountingDetailModel';
import { LinkManagementMemberModel } from './linkManagementMemberModel';
//@@tag-Version-2201011
/**
 * تیتر سند حسابداری
 */
export class LinkManagementAccountingModel extends BaseModuleEntity<number> {
  /** تاریخ شروع */
  beginDate: Date;
  /** تاریخ پایان */
  endDate?: Date;
  /** لینک به شناسه عضو مدیریت لینک */
  linkManagementMemberId: number;
  /** سند قطعی است و قابلیت ویرایش یا ثبت ردیف ندارد */
  isCertainDocument: boolean;
  // tslint:disable-next-line: variable-name
  virtual_ManagementMember: LinkManagementMemberModel;
  /** عضو مدیریت لینک */
  managementMember: LinkManagementMemberModel;
  /** مبلغ بدهکار */
  debtor: number;
  /** مبلغ بستانکار سند */
  creditor: number;
  /** توضیحات */
  description: string;
  /** توضیحات اضافی */
  notes: string;
  /** لیست جزئیات حسابداری */
  accountingDetail: LinkManagementAccountingDetailModel;
}
