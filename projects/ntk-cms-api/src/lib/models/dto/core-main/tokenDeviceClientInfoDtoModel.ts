import { DeviceTypeEnum } from '../../enums/base/deviceTypeEnum';
import { OperatingSystemTypeEnum } from '../../enums/base/operatingSystemTypeEnum';

export class TokenDeviceClientInfoDtoModel {
  securityKey: string;
  clientMACAddress: string;
  notificationId: string;
  oSType: OperatingSystemTypeEnum;
  deviceType: DeviceTypeEnum;
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
