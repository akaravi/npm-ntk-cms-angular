import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxScheduleRunInfoModel } from './smsLogOutBoxScheduleRunInfoModel';
//@@tag-Version-2201011
/**
 * مدل زمان‌بندی کار لاگ صندوق خروجی پیامک
 */
export class SmsLogOutBoxTaskSchedulerModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شماره فرستنده */
  linkFromNumber: string;
  /** شماره‌های گیرنده */
  toNumbers: string;
  /** لیست دسته‌بندی‌های مخاطب */
  toContactCategories: string[];
  /** لیست محتواهای مخاطب */
  toContactContents: string[];
  /** پیام */
  message: string;
  /** ارسال از طریق صف */
  sendByQueue: boolean;
  /** فلش است */
  isFlash: boolean;
  /** تاریخ شروع ارسال برنامه‌ریزی شده */
  scheduleSendStart: Date;
  /** تاریخ انقضای ارسال برنامه‌ریزی شده */
  scheduleSendExpire: Date;
  /** تاریخ مجاز برای اجرای بعدی برنامه‌ریزی شده */
  scheduleSendAllowNextRun: Date;
  /** شناسه قفل‌کننده برنامه‌ریزی */
  scheduleLockerId: string;
  /** تاریخ انقضای قفل برنامه‌ریزی */
  scheduleLockerExpire?: Date;
  /** تاریخ قفل اجرای برنامه‌ریزی */
  ScheduleLockedRun?: Date;
  /** Cron برنامه‌ریزی */
  scheduleCron: string;
  /** تعداد اجرای برنامه‌ریزی */
  scheduleCountRun: number;
  /** اجرای قفل برنامه‌ریزی موفقیت‌آمیز است */
  scheduleLockedRunIsSuccess: boolean;
  /** اختلاف زمان کلاینت (فرمت HH:mm:ss، مثال: '03:30:00') */
  differenceClientDateTime: string;
  /** لیست اطلاعات اجرای برنامه‌ریزی */
  scheduleRunInfos: SmsLogOutBoxScheduleRunInfoModel[];
}
