import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogInBoxModel } from './smsLogInBoxModel';

export class SmsLogInBoxLockModel extends BaseModuleEntity<string> {
  lockDate: Date;
  processId: number;
  // tslint:disable-next-line: variable-name
  virtual_InBox: SmsLogInBoxModel;
  inBox: SmsLogInBoxModel;
}
