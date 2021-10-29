import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogInBoxModel } from './smsLogInBoxModel';

export class SmsLogInBoxLockModel extends BaseModuleEntity<string> {
  LockDate: Date;
  ProcessId: number;
  // tslint:disable-next-line: variable-name
  virtual_InBox: SmsLogInBoxModel;
  InBox: SmsLogInBoxModel;
}
