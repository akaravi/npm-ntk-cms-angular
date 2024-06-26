import { DeviceStatusEnum } from '../../enums/base/deviceStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
//@@tag-Version-2201011
export class ApplicationMemberInfoModel extends BaseModuleEntity<string> {
  linkUserId?: number;
  linkMemberId?: number;
  deviceStatus: DeviceStatusEnum;
  deviceId: string;
  deviceBrand: string;
  simCard: string;
  country: string;
  language: string;
  notificationId: string;
  linkApplicationId?: number;
  application: ApplicationAppModel;
  appBuildVer: number;
  appSourceVer: string;
  deviceIP: string;
  scorePercent: number;
  scoreComment: string;
  linkLocationId?: number;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
}

