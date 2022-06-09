import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';

export class SmsLogOutBoxDetailBulkLockModel extends BaseModuleEntity<string> {
  lockDate: Date;
  processType: string;
  defaultApiNumber?: string;
  processId: number;
  processIdSecond?: number;
  linkOutBoxDetailId: string;
  outBoxDetailBulk: SmsLogOutBoxDetailBulkModel;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk: SmsLogOutBoxDetailBulkModel;
}
