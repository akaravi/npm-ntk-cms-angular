import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';
//@@tag-Version-2201011
export class SmsMainApiNumberPermissionModel extends BaseModuleEntity<string> {
  linkApiNumberId: string;
  linkCoreUserId?: number;
  linkCoreSiteId?: number;
  linkCoreUserGroupId?: number;
  linkCoreSiteCategoryId?: number;
  hasAccess: boolean;
  hasInherits: boolean;
  fromDate: Date;
  expireDate: Date;
  accessStatus: number;
  action: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiNumber: SmsMainApiNumberModel;
  apiNumber: SmsMainApiNumberModel;
}
