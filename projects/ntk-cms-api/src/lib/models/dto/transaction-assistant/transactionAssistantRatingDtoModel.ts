/**
 * transactionAssistantRatingDtoModel
 * DTO امتیاز/نظر سفارش
 */
export class TransactionAssistantRatingDtoModel {
  /** شناسه امتیاز */
  id: string;
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** امتیاز (مثلاً ۱ تا ۵) */
  score: number;
}
