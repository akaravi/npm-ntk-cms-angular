import { BaseModuleEntity } from '../base/baseModuleEntity';
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
  scheduleCron: string;

}
