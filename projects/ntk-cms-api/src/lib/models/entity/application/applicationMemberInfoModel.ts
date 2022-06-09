import { EnumDeviceStatus } from '../../enums/enumDeviceStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';

export class ApplicationMemberInfoModel extends BaseModuleEntity<string>  {
  linkUserId?: number;
  linkMemberId?: number;
  deviceStatus: EnumDeviceStatus;
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
  locationLat: string;
  locationLong: string;
  scorePercent: number;
  scoreComment: string;
}

