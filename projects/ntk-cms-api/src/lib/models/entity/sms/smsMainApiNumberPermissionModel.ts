import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';

export class SmsMainApiNumberPermissionModel extends BaseModuleEntity<string> {
  LinkApiNumberId: string;
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
  virtual_ApiNumber: SmsMainApiNumberModel;
  ApiNumber: SmsMainApiNumberModel;
}
