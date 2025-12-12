/**
 * وضعیت سفارش
 */
export enum TransactionAssistantOrderStatusEnum {
  /** در انتظار پرداخت */
  PendingPayment = 0,
  /** پرداخت شده */
  Paid = 1,
  /** در حال ارسال */
  Shipping = 2,
  /** تحویل داده شده */
  Delivered = 3,
  /** تکمیل شده */
  Completed = 4,
  /** لغو شده */
  Cancelled = 5,
}
