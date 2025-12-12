import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantRatingModel
 * امتیاز/نظر سفارش
 */
export class TransactionAssistantRatingModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** امتیاز (مثلاً ۱ تا ۵) */
  score: number;
  /** نظر کاربر (اختیاری) */
  comment?: string;
  /** شناسه تصویر اصلی امتیاز */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی امتیاز */
  linkMainImageIdSrc?: string;
}
