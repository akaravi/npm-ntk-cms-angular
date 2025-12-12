/**
 * وضعیت گمرکی محموله
 */
export enum TransactionAssistantCustomsStatusEnum {
  /** در انتظار ترخیص */
  Pending = 0,
  /** در حال ترخیص */
  InProgress = 1,
  /** ترخیص شده */
  Cleared = 2,
  /** نیاز به بررسی بیشتر */
  RequiresReview = 3,
  /** رد شده */
  Rejected = 4,
  /** معاف از گمرک */
  Exempt = 5,
}
