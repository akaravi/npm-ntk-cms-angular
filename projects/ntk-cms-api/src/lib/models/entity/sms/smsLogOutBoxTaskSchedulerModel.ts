import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxScheduleRunInfoModel } from './smsLogOutBoxScheduleRunInfoModel';
//@@tag-Version-2201011
export class SmsLogOutBoxTaskSchedulerModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkFromNumber: string;
  toNumbers: string;
  toContactCategories: string[];
  toContactContents: string[];
  message: string;
  sendByQueue: boolean;
  isFlash: boolean;
  scheduleSendStart: Date;
  scheduleSendExpire: Date;
  scheduleSendAllowNextRun: Date;
  scheduleLockerId: string;
  scheduleLockerExpire?: Date;
  ScheduleLockedRun?: Date;
  scheduleCron: string;
  scheduleCountRun: number;
  scheduleLockedRunIsSuccess: boolean;
  /**
   * اختلاف زمان کلاینت (فرمت HH:mm:ss، مثال: '03:30:00')
   */
  differenceClientDateTime: string;
  scheduleRunInfos: SmsLogOutBoxScheduleRunInfoModel[];
}
