import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailBulkModel extends BaseModuleEntity<string> {
  lockDate: Date;
  processType?: any;
  processid: number;
  processIdSecond?: any;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk?: any;
  outBoxDetailBulk?: any;
}
