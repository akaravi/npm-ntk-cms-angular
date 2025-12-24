import { RecordAdminStatusEnum } from '../../enums/base/_export';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxScheduleRunInfoModel } from './smsLogOutBoxScheduleRunInfoModel';
//@@tag-Version-2201011
/**
 * مدل صف لاگ صندوق خروجی پیامک
 */
export class SmsLogOutBoxQueueModel extends BaseModuleEntity<string> {
  /** وضعیت رکورد ادمین */
  adminRecordStatus = RecordAdminStatusEnum.Pending;
  /** پیام */
  message: string;
  /** فلش است */
  isFlash: boolean;
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شماره فرستنده */
  linkFromNumber: string;
  /** تاریخ شروع ارسال برنامه‌ریزی شده */
  scheduleSendStart: Date;
  /** تاریخ انقضای ارسال برنامه‌ریزی شده */
  scheduleSendExpire: Date;
  /** شماره‌های گیرنده */
  toNumbers: string;
  /** فیلتر شماره فعال است */
  statusNumberFiltering: boolean;
  /** فیلتر متن فعال است */
  statusTextFiltering: boolean;
  /** API پایدار نیست */
  statusNotStableApi: boolean;
  /** API خارج از سرویس است */
  statusOutOfServiceApi: boolean;
  /** کاراکتر فیلتر شماره */
  numberFilteringChar: string;
  /** کاراکتر فیلتر متن */
  textFilteringChar: string;
  /** تعداد اجرای صف */
  queueCountRun: number;
  /** تاریخ مجاز برای اجرای بعدی صف */
  queueAllowNextRun: Date;
  /** تاریخ قفل اجرای صف */
  queueLockedRun?: Date;
  /** تاریخ انقضای قفل صف */
  queueLockerExpire?: Date;
  /** شناسه قفل‌کننده صف */
  queueLockerId: string;
  /** صف تکمیل شده است */
  queueCompleted: boolean;
  /** تاریخ تکمیل صف */
  queueCompleteDate: Date;
  /** میکروسرویس قفل‌کننده صف */
  queueLockerMicroservice: string;
  /** لیست اطلاعات اجرای برنامه‌ریزی */
  scheduleRunInfos: SmsLogOutBoxScheduleRunInfoModel[];
}
