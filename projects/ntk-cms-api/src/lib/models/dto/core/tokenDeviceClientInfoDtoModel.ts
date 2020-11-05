import { EnumDeviceType } from '../../enums/enumDeviceType';
import { EnumOperatingSystemType } from '../../enums/enumOperatingSystemType';

export class TokenDeviceClientInfoDtoModel {
  SecurityKey: string;
  ClientMACAddress: string;
  OSType: EnumOperatingSystemType;
  DeviceType: EnumDeviceType;
  PackageName: string;
}
