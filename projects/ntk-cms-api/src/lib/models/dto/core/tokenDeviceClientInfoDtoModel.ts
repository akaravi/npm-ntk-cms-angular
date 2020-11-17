import { EnumDeviceType } from '../../enums/enumDeviceType';
import { EnumOperatingSystemType } from '../../enums/enumOperatingSystemType';

export class TokenDeviceClientInfoDtoModel {
  SecurityKey: string;
  ClientMACAddress: string;
  NotificationId: string;
  OSType: EnumOperatingSystemType;
  DeviceType: EnumDeviceType;
  PackageName: string;
  AppBuildVer: number;
  AppSourceVer: string;
  Country: string;
  LocationLat: string;
  LocationLong: string;
  SimCard: string;
  Language: string;
  DeviceBrand: string;
}
