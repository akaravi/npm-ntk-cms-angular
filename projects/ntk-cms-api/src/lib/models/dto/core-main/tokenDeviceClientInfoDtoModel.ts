import { EnumDeviceType } from '../../enums/base/deviceTypeEnum';
import { EnumOperatingSystemType } from '../../enums/base/operatingSystemTypeEnum';

export class TokenDeviceClientInfoDtoModel {
  securityKey: string;
  clientMACAddress: string;
  notificationId: string;
  oSType: EnumOperatingSystemType;
  deviceType: EnumDeviceType;
  packageName: string;
  appBuildVer: number;
  appSourceVer: string;
  country: string;
  locationLat: string;
  locationLong: string;
  simCard: string;
  language: string;
  deviceBrand: string;
}
