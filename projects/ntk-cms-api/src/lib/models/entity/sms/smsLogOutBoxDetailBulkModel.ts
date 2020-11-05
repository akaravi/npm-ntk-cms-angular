import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailBulkModel extends BaseModuleEntity<number> {
  lockDate: string;
  processType?: any;
  processid: number;
  processIdSecond?: any;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk?: any;
  outBoxDetailBulk?: any;
}
