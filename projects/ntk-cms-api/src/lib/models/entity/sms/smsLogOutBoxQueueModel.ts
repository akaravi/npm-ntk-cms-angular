import { BaseModuleEntity } from '../base/baseModuleEntity';
export class SmsLogOutBoxQueueModel extends BaseModuleEntity<string> {
  message: string;
  isFlash: boolean;
  linkApiPathId: string;
  linkFromNumber:string;
  scheduleSendStart: Date;
  toNumbers: string;
  numberFiltering: boolean;
  textFiltering: boolean;
  numberFilteringChar: string;
  textFilteringChar: string;
  queueLockedRun?:Date;
  queueLockerExpire?:Date;
  queueLockerId:string;
  queueCompleted:boolean;
  queueCompleteDate:Date;
}
