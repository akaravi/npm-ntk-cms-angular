import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class SmsMainClientPermissionModel extends BaseModuleEntity<string> {
  linkCoreUserId: number;
  fromDate: Date;
  expireDate: Date;
  description: string;
  apiKey: string;
  firewallAllowIP: string;
  firewallAllowIPList: string[] = [];
}
