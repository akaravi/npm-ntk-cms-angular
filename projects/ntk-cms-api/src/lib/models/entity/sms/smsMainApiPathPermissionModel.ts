import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPermissionModel extends BaseModuleEntity<string> {
  LinkSiteAndUserid: number;
  LinkApiPathId: string;
  HasAccess: boolean;
  HasInherits: boolean;
  FromDate: Date;
  EndDate: Date;
  AccessStatus: number;
  Action: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  ApiPath: SmsMainApiPathModel;
}
