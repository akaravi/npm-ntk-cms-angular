import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantPersonTypeEnum } from '../../enums/transaction-assistant/transactionAssistantPersonTypeEnum';

/**
 * transactionAssistantInvoiceViewModel
 * فاکتور رسمی
 */
export class transactionAssistantInvoiceViewModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** نوع شخص (حقیقی/حقوقی) */
  personType: transactionAssistantPersonTypeEnum;
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
}


