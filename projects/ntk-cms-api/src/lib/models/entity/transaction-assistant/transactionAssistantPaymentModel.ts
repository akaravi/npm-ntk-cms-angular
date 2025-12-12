import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantPaymentMethodEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentMethodEnum';
import { transactionAssistantPaymentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentStatusEnum';

/**
 * transactionAssistantPaymentModel
 * پرداخت سفارش
 */
export class transactionAssistantPaymentModel extends BaseModuleEntity<string> {
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
  /** شناسه تصویر اصلی پرداخت */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی پرداخت */
  linkMainImageIdSrc?: string;
}

