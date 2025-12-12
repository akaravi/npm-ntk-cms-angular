/**
 * وضعیت پرداخت
 */
export enum TransactionAssistantPaymentStatusEnum {
  /** در انتظار پرداخت */
  Pending = 0,
  /** پرداخت شده */
  Paid = 1,
  /** پرداخت ناموفق */
  Failed = 2,
  /** بازگشت وجه */
  Refunded = 3,
}
