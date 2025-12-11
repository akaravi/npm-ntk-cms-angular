import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantRatingViewModel
 * امتیاز/نظر سفارش
 */
export class transactionAssistantRatingViewModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** امتیاز (مثلاً ۱ تا ۵) */
  score: number;
  /** نظر کاربر (اختیاری) */
  comment?: string;
}


