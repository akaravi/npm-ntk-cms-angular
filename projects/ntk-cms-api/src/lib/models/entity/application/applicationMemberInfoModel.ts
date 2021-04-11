import { EnumDeviceStatus } from '../../enums/enumDeviceStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';

export class ApplicationMemberInfoModel extends BaseModuleEntity<string>  {

  LinkUserId?: number;
  LinkMemberId?: number;
  DeviceStatus: EnumDeviceStatus;
  DeviceId: string;
  DeviceBrand: string;
  SimCard: string;
  Country: string;
  Language: string;
  NotificationId: string;
  LinkApplicationId?: number;
  Application: ApplicationAppModel;
  AppBuildVer: number;
  AppSourceVer: string;
  DeviceIP: string;
  LocationLat: string;
  LocationLong: string;
  ScorePercent: number;
  ScoreComment: string;
}

