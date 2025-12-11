/**
 * وضعیت سبد خرید
 */
export enum transactionAssistantCartStatusEnum {
  /** باز (قابل ویرایش) */
  Open = 0,
  /** قفل شده (در حال پردازش) */
  Locked = 1,
  /** تسویه/تبدیل به سفارش */
  CheckedOut = 2,
  /** لغو شده */
  Cancelled = 3
}


