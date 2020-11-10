import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathPermissionModel extends BaseModuleEntity<number> {
  linkSiteAndUserid: number;
  linkApiPathId?: any;
  hasAccess: boolean;
  hasInherits: boolean;
  fromDate: string;
  accessStatus: number;
  action: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath?: any;
  apiPath?: any;
}