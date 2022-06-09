import { EnumSharingAccountingType } from '../../enums/linkManagement/enumSharingAccountingType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';

export class LinkManagementAccountingDetailModel extends BaseModuleEntity<number> {
  linkManagementAccountingId: number;
  // tslint:disable-next-line: variable-name
  virtual_Accounting: LinkManagementAccountingModel;
  accounting: LinkManagementAccountingModel;
  accountingType: EnumSharingAccountingType;
  linkExternalShopInvoiceSaleDetailId?: number;
  rowNumber: number;
  description: string;
  debtor: number;
  creditor: number;
  fishNumber: string;
  tokenNumber: string;
  receiptCode: string;
}
