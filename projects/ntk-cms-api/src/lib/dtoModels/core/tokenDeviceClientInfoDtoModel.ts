import { EnumDeviceType } from '../../models/Enums/enumDeviceType';
import { EnumOperatingSystemType } from '../../models/Enums/enumOperatingSystemType';

export class TokenDeviceClientInfoDtoModel {
  SecurityKey: string;
  ClientMACAddress: string;
  OSType: EnumOperatingSystemType;
  DeviceType: EnumDeviceType;
  PackageName: string;
}
