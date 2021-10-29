import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';

export class SmsLogOutBoxDetailLockModel extends BaseModuleEntity<string> {
  LockDate: Date;
  ProcessType: string;
  DefaultApiNumber?: string;
  ProcessId: number;
  ProcessIdSecond?: number;
  LinkOutBoxDetailId?: number;
  OutBoxDetail: SmsLogOutBoxDetailModel;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetail: SmsLogOutBoxDetailModel;
}
