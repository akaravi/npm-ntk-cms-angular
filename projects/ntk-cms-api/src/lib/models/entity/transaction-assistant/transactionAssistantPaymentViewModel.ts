import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantPaymentMethodEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentMethodEnum';
import { transactionAssistantPaymentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentStatusEnum';

/**
 * transactionAssistantPaymentViewModel
 * پرداخت سفارش
 */
export class transactionAssistantPaymentViewModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** روش پرداخت */
  method: transactionAssistantPaymentMethodEnum;
  /** وضعیت پرداخت */
  status: transactionAssistantPaymentStatusEnum;
  /** مبلغ پرداخت */
  amount: number;
  /** مرجع درگاه (اختیاری) */
  gatewayReference?: string;
  /** تاریخ پرداخت موفق (اختیاری) */
  paidAt?: Date;
}


