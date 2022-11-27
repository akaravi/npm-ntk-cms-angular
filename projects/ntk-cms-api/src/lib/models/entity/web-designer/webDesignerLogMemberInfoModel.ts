import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class WebDesignerLogMemberInfoModel extends BaseModuleEntity<string>  {
  linkUserId?: number;
  deviceId: string;
  deviceIP: string;
  language: string;
  notificationId: string;
  linkLocationId?:number;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationIdTitle:string;
  linkLocationIdParentTitle:string;
}
