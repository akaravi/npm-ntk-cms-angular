import { SharingAccountingTypeEnum } from '../../enums/link-management/sharingAccountingTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementAccountingModel } from './linkManagementAccountingModel';
//@@tag-Version-2201011
/**
 * ردیف های سند
 * بر اساس عملیات های نمایش و کلیک دو ردیف می خورد
 * یکی برای خریدار
 * یکی برای فروشنده
 */
export class LinkManagementAccountingDetailModel extends BaseModuleEntity<number> {
  /** مربوط به سند */
  linkManagementAccountingId: number;
  // tslint:disable-next-line: variable-name
  virtual_Accounting: LinkManagementAccountingModel;
  /** سند */
  accounting: LinkManagementAccountingModel;
  /** نوع ردیف */
  accountingType: SharingAccountingTypeEnum;
  /** لینک به شناسه جزئیات فاکتور فروش ماژول خارجی */
  linkExternalShopInvoiceSaleDetailId?: number;
  /** شماره ردیف */
  rowNumber: number;
  /** توضیحات */
  description: string;
  /** بدهکار */
  debtor: number;
  /** بستانکار */
  creditor: number;
  /** شماره فیش */
  fishNumber: string;
  /** شماره توکن */
  tokenNumber: string;
  /** شماره تحویل */
  receiptCode: string;
}
