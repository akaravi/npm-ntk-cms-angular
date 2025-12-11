import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantOrderStatusEnum } from '../../enums/transaction-assistant/transactionAssistantOrderStatusEnum';
import { transactionAssistantPaymentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentStatusEnum';
import { transactionAssistantOrderTypeEnum } from '../../enums/transaction-assistant/transactionAssistantOrderTypeEnum';
import { transactionAssistantExportDeliveryTypeEnum } from '../../enums/transaction-assistant/transactionAssistantExportDeliveryTypeEnum';

/**
 * transactionAssistantOrderViewModel
 * سفارش با فیلدهای Link* و وضعیت‌های صادرات
 */
export class transactionAssistantOrderViewModel extends BaseModuleEntity<string> {
  /** شناسه سبد خرید مرتبط */
  linkCartId: string;
  /** وضعیت سفارش */
  status: transactionAssistantOrderStatusEnum;
  /** مبلغ کل سفارش */
  totalPrice: number;
  /** وضعیت پرداخت */
  paymentStatus: transactionAssistantPaymentStatusEnum;
  /** توضیحات سفارش */
  description?: string;
  /** نوع سفارش (داخلی/صادراتی) */
  orderType: transactionAssistantOrderTypeEnum;
  /** نوع تحویل صادراتی (اختیاری) */
  exportDeliveryType?: transactionAssistantExportDeliveryTypeEnum;
  /** کشور مقصد (اختیاری) */
  destinationCountry?: string;
  /** شهر مقصد (اختیاری) */
  destinationCity?: string;
}


