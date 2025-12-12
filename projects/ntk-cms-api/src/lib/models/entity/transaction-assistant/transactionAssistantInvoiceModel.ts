import { TransactionAssistantPersonTypeEnum } from '../../enums/transaction-assistant/transactionAssistantPersonTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantInvoiceModel
 * فاکتور رسمی
 */
export class TransactionAssistantInvoiceModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** نوع شخص (حقیقی/حقوقی) */
  personType: TransactionAssistantPersonTypeEnum;
  /** نام قانونی یا نام کامل */
  legalName?: string;
  /** کد/شناسه ملی */
  nationalId?: string;
  /** شماره اقتصادی (برای حقوقی) */
  taxId?: string;
  /** شماره فاکتور رسمی */
  invoiceNumber?: string;
  /** مبلغ کل فاکتور */
  totalAmount: number;
  /** مبلغ مالیات */
  taxAmount: number;
  /** آدرس تحویل به صورت JSON */
  addressJson?: string;
  /** شناسه تصویر اصلی فاکتور */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی فاکتور */
  linkMainImageIdSrc?: string;
}
