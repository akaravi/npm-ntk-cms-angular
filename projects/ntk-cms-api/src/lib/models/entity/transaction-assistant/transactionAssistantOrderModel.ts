import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TransactionAssistantOrderStatusEnum } from '../../enums/transaction-assistant/transactionAssistantOrderStatusEnum';
import { TransactionAssistantPaymentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantPaymentStatusEnum';
import { TransactionAssistantOrderTypeEnum } from '../../enums/transaction-assistant/transactionAssistantOrderTypeEnum';
import { TransactionAssistantExportDeliveryTypeEnum } from '../../enums/transaction-assistant/transactionAssistantExportDeliveryTypeEnum';

/**
 * transactionAssistantOrderModel
 * سفارش با فیلدهای Link* و وضعیت‌های صادرات
 */
export class TransactionAssistantOrderModel extends BaseModuleEntity<string> {
  /** شناسه سبد خرید مرتبط */
  linkCartId: string;
  /** وضعیت سفارش */
  status: TransactionAssistantOrderStatusEnum;
  /** مبلغ کل سفارش */
  totalPrice: number;
  /** وضعیت پرداخت */
  paymentStatus: TransactionAssistantPaymentStatusEnum;
  /** توضیحات سفارش */
  description?: string;
  /** نوع سفارش (داخلی/صادراتی) */
  orderType: TransactionAssistantOrderTypeEnum;
  /** نوع تحویل صادراتی (اختیاری) */
  exportDeliveryType?: TransactionAssistantExportDeliveryTypeEnum;
  /** کشور مقصد (اختیاری) */
  destinationCountry?: string;
  /** شهر مقصد (اختیاری) */
  destinationCity?: string;
  /** شناسه تصویر اصلی سفارش */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی سفارش */
  linkMainImageIdSrc?: string;
}

export const transactionAssistantOrderModel = TransactionAssistantOrderModel;
