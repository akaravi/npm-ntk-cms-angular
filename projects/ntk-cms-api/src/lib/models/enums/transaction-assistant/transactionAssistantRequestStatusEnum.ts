/**
 * وضعیت درخواست محصول
 */
export enum transactionAssistantRequestStatusEnum {
  /** در انتظار بررسی */
  Pending = 0,
  /** تطبیق یافته با تامین‌کننده */
  Matched = 1,
  /** در حال انجام */
  InProgress = 2,
  /** تکمیل شده */
  Completed = 3,
  /** لغو شده */
  Cancelled = 4
}


