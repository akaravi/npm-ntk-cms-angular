/**
 * transactionAssistantAddressDtoModel
 * تطابق ۱:۱ با DTO بک‌اند (C#) برای آدرس تحویل
 */
export class TransactionAssistantAddressDtoModel {
  /** شناسه آدرس */
  id: string;
  /** شناسه کاربر هسته (اختیاری برای مهمان) */
  linkCoreUserId?: number;
  /** شناسه استان */
  provinceId?: number;
  /** شهر */
  city: string;
  /** خط آدرس کامل */
  addressLine: string;
}
