import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TransactionAssistantShipmentStatusEnum } from '../../enums/transaction-assistant/transactionAssistantShipmentStatusEnum';
import { TransactionAssistantCustomsStatusEnum } from '../../enums/transaction-assistant/transactionAssistantCustomsStatusEnum';

/**
 * transactionAssistantOrderShipmentModel
 * ارسال سفارش و وضعیت گمرکی
 */
export class TransactionAssistantOrderShipmentModel extends BaseModuleEntity<string> {
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
  status: TransactionAssistantShipmentStatusEnum;

  /** وضعیت گمرکی (اختیاری) */
  customsStatus?: TransactionAssistantCustomsStatusEnum;
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
  /** شناسه تصویر اصلی ارسال */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی ارسال */
  linkMainImageIdSrc?: string;
}
