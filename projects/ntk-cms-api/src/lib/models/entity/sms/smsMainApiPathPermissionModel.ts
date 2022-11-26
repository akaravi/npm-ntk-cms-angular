import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
export class SmsMainApiPathPermissionModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
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
  virtual_ApiPath: SmsMainApiPathModel;
  apiPath: SmsMainApiPathModel;
}
