import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxScheduleRunInfoModel } from './smsLogOutBoxScheduleRunInfoModel';
export class SmsLogOutBoxTaskSchedulerModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkFromNumber: string;
  toNumbers: string;
  toContactCategories:string[];
  toContactContents: string[];
  message: string;
  sendByQueue: boolean;
  isFlash: boolean;
  scheduleSendStart:Date;
  scheduleSendExpire:Date;
  scheduleSendAllowNextRun: Date;
  scheduleLockerId:string;
  scheduleLockerExpire?:Date;
  ScheduleLockedRun?:Date;
  scheduleCron: string;
  scheduleCountRun:number;
  scheduleLockedRunIsSuccess:boolean;
  scheduleRunInfos:SmsLogOutBoxScheduleRunInfoModel[];
}
