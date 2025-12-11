import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantOfferStatusEnum } from '../../enums/transaction-assistant/transactionAssistantOfferStatusEnum';

/**
 * transactionAssistantSupplierOfferViewModel
 * پیشنهاد تامین‌کننده
 */
export class transactionAssistantSupplierOfferViewModel extends BaseModuleEntity<string> {
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
  status: transactionAssistantOfferStatusEnum;
}


