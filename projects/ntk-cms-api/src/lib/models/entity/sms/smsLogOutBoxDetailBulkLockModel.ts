import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';

export class SmsLogOutBoxDetailBulkLockModel extends BaseModuleEntity<string> {
  LockDate: Date;
  ProcessType: string;
  DefaultApiNumber?: string;
  ProcessId: number;
  ProcessIdSecond?: number;
  LinkOutBoxDetailId?: number;
  OutBoxDetailBulk: SmsLogOutBoxDetailBulkModel;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk: SmsLogOutBoxDetailBulkModel;
}
