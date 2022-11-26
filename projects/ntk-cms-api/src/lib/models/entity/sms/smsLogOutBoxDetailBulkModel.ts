import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class SmsLogOutBoxDetailBulkModel extends BaseModuleEntity<string> {
  lockDate: Date;
  processType?: any;
  processid: number;
  processIdSecond?: any;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk?: any;
  outBoxDetailBulk?: any;
}
