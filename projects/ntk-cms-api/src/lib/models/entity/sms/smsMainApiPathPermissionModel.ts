import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathPermissionModel extends BaseModuleEntity<number> {
  LinkSiteAndUserid: number;
  LinkApiPathId?: any;
  HasAccess: boolean;
  HasInherits: boolean;
  FromDate: Date;
  AccessStatus: number;
  Action: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath?: any;
  ApiPath?: any;
}
