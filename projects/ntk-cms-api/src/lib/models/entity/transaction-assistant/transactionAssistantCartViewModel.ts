import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantCartStatusEnum } from '../../enums/transaction-assistant/transactionAssistantCartStatusEnum';

/**
 * transactionAssistantCartViewModel
 * سبد خرید با وضعیت و کاربر
 */
export class transactionAssistantCartViewModel extends BaseModuleEntity<string> {
  /** شناسه کاربر هسته مالک سبد (اختیاری) */
  linkCoreUserId?: number;
  /** تاریخ بستن سبد (اختیاری) */
  closeDate?: Date;
  /** توضیحات سبد */
  description?: string;
  /** وضعیت سبد خرید */
  status: transactionAssistantCartStatusEnum;
}


