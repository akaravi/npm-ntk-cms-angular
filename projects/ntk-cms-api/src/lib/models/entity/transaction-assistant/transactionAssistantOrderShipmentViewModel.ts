import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantShipmentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantShipmentStatusEnum';
import { transactionAssistantCustomsStatusEnum } from '../../enums/transaction-assistant/transactionAssistantCustomsStatusEnum';

/**
 * transactionAssistantOrderShipmentViewModel
 * ارسال سفارش و وضعیت گمرکی
 */
export class transactionAssistantOrderShipmentViewModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** شناسه تامین‌کننده (اختیاری) */
  linkSupplierId?: string;
  /** نام شرکت حمل */
  carrierName?: string;
  /** نام راننده */
  driverName?: string;
  /** شماره تماس راننده */
  driverPhone?: string;
  /** کد رهگیری */
  trackingCode?: string;
  /** وزن مرسوله */
  weight?: number;
  /** زمان تحویل پیش‌بینی‌شده */
  expectedDeliveryAt?: Date;
  /** زمان تحویل واقعی */
  deliveredAt?: Date;
  /** وضعیت ارسال */
  status: transactionAssistantShipmentStatusEnum;

  /** وضعیت گمرکی (اختیاری) */
  customsStatus?: transactionAssistantCustomsStatusEnum;
  /** شماره اظهارنامه گمرکی */
  customsDeclarationNumber?: string;
  /** تاریخ ترخیص */
  customsClearedAt?: Date;
  /** نام گمرک مبدا */
  originCustomsName?: string;
  /** نام گمرک مقصد */
  destinationCustomsName?: string;
  /** مبلغ عوارض گمرکی */
  customsDutyAmount?: number;
}


