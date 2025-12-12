import { BaseModuleEntity } from '../base/baseModuleEntity';
import { TransactionAssistantCartStatusEnum } from '../../enums/transaction-assistant/transactionAssistantCartStatusEnum';

/**
 * transactionAssistantCartModel
 * سبد خرید با وضعیت و کاربر
 */
export class TransactionAssistantCartModel extends BaseModuleEntity<string> {
  /** شناسه کاربر هسته مالک سبد (اختیاری) */
  linkCoreUserId?: number;
  /** تاریخ بستن سبد (اختیاری) */
  closeDate?: Date;
  /** توضیحات سبد */
  description?: string;
  /** وضعیت سبد خرید */
  status: TransactionAssistantCartStatusEnum;
  /** شناسه تصویر اصلی سبد خرید */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی سبد خرید */
  linkMainImageIdSrc?: string;
}

export const transactionAssistantCartModel = TransactionAssistantCartModel;
