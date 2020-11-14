import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailBulkModel extends BaseModuleEntity<number> {
  LockDate: Date;
  ProcessType?: any;
  Processid: number;
  ProcessIdSecond?: any;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk?: any;
  OutBoxDetailBulk?: any;
}
