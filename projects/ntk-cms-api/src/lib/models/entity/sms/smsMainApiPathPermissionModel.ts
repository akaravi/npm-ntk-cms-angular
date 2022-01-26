import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPermissionModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  LinkCoreUserId?: number;
  LinkCoreSiteId?: number;
  LinkCoreUserGroupId?: number;
  LinkCoreSiteCategoryId?: number;
  HasAccess: boolean;
  HasInherits: boolean;
  FromDate: Date;
  ExpireDate: Date;
  AccessStatus: number;
  Action: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  ApiPath: SmsMainApiPathModel;
}
