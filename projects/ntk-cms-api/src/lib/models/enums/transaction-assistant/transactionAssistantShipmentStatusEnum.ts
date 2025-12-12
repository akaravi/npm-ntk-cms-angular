/**
 * وضعیت ارسال مرسوله
 */
export enum TransactionAssistantShipmentStatusEnum {
  /** در انتظار ارسال */
  Pending = 0,
  /** دریافت توسط پیک/باربری */
  Pickup = 1,
  /** در حال حمل */
  InTransit = 2,
  /** تحویل داده شده */
  Delivered = 3,
  /** ناموفق */
  Failed = 4,
  /** برگشت خورده */
  Returned = 5,
}
