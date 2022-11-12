import { EnumDeviceType } from '../../enums/base/enumDeviceType';
import { EnumOperatingSystemType } from '../../enums/base/enumOperatingSystemType';

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
