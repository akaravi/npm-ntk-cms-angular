import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TransactionAssistantOfferStatusEnum } from '../../enums/transaction-assistant/transactionAssistantOfferStatusEnum';

/**
 * transactionAssistantSupplierOfferModel
 * پیشنهاد تامین‌کننده
 */
export class TransactionAssistantSupplierOfferModel extends BaseModuleEntity<string> {
  /** شناسه درخواست محصول مرتبط */
  linkProductRequestId: string;
  /** شناسه تامین‌کننده */
  linkSupplierId: string;
  /** مقدار پیشنهادی */
  offeredQty: number;
  /** قیمت پیشنهادی */
  offeredPrice: number;
  /** تاریخ انقضا (اختیاری) */
  expiresAt?: Date;
  /** توضیحات (اختیاری) */
  notes?: string;
  /** وضعیت پیشنهاد */
  status: TransactionAssistantOfferStatusEnum;
  /** شناسه تصویر اصلی پیشنهاد */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی پیشنهاد */
  linkMainImageIdSrc?: string;
}
