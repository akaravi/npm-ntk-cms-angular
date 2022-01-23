import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';

export class SmsMainApiNumberPermissionModel extends BaseModuleEntity<string> {
  LinkCmsUserId: number;
  LinkApiNumberId: string;
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
