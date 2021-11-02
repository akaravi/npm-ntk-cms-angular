import { EnumSharingAccountingType } from '../../enums/linkManagement/enumSharingAccountingType';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';

export class LinkManagementAccountingDetailModel extends BaseModuleEntity<number> {
  LinkManagementAccountingId: number;
  // tslint:disable-next-line: variable-name
  virtual_Accounting: LinkManagementAccountingModel;
  Accounting: LinkManagementAccountingModel;
  AccountingType: EnumSharingAccountingType;
  LinkExternalShopInvoiceSaleDetailId?: number;
  RowNumber: number;
  Description: string;
  Debtor: number;
  Creditor: number;
  FishNumber: string;
  TokenNumber: string;
  ReceiptCode: string;
}
