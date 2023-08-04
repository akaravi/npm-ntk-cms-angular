import { SharingAccountingTypeEnum } from '../../enums/linkManagement/sharingAccountingTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';
//@@tag-Version-2201011
export class LinkManagementAccountingDetailModel extends BaseModuleEntity<number> {
  linkManagementAccountingId: number;
  // tslint:disable-next-line: variable-name
  virtual_Accounting: LinkManagementAccountingModel;
  accounting: LinkManagementAccountingModel;
  accountingType: SharingAccountingTypeEnum;
  linkExternalShopInvoiceSaleDetailId?: number;
  rowNumber: number;
  description: string;
  debtor: number;
  creditor: number;
  fishNumber: string;
  tokenNumber: string;
  receiptCode: string;
}
