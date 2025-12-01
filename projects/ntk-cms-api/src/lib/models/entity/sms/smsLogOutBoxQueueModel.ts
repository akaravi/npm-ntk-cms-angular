import { RecordAdminStatusEnum } from '../../enums/base/_export';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxScheduleRunInfoModel } from './smsLogOutBoxScheduleRunInfoModel';
//@@tag-Version-2201011
export class SmsLogOutBoxQueueModel extends BaseModuleEntity<string> {
  mainAdminRecordStatus = RecordAdminStatusEnum.Pending;
  message: string;
  isFlash: boolean;
  linkApiPathId: string;
  linkFromNumber: string;
  scheduleSendStart: Date;
  scheduleSendExpire: Date;
  toNumbers: string;
  statusNumberFiltering: boolean;
  statusTextFiltering: boolean;
  statusNotStableApi: boolean;
  statusOutOfServiceApi: boolean;
  numberFilteringChar: string;
  textFilteringChar: string;
  queueCountRun: number;
  queueAllowNextRun: Date;
  queueLockedRun?: Date;
  queueLockerExpire?: Date;
  queueLockerId: string;
  queueCompleted: boolean;
  queueCompleteDate: Date;
  queueLockerMicroservice: string;
  scheduleRunInfos: SmsLogOutBoxScheduleRunInfoModel[];
}
