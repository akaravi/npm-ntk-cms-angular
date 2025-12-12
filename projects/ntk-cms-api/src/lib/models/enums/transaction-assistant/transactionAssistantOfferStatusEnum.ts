/**
 * وضعیت پیشنهاد تامین‌کننده
 */
export enum TransactionAssistantOfferStatusEnum {
  /** در انتظار بررسی */
  Pending = 0,
  /** پذیرفته شده */
  Accepted = 1,
  /** رد شده */
  Rejected = 2,
  /** منقضی شده */
  Expired = 3,
}
