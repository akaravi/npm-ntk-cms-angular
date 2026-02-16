/**
 * انواع دستورات ارسالی به میکروسرویس‌ها
 */
export enum MicroServiceCommandTypeEnum {
  /** توقف ارسال وضعیت */
  PauseStatus = 0,
  /** از سرگیری ارسال وضعیت */
  ResumeStatus = 1,
  /** بارگذاری مجدد تنظیمات */
  ReloadConfig = 2,
  /** به‌روزرسانی تنظیمات */
  UpdateSettings = 3
}
