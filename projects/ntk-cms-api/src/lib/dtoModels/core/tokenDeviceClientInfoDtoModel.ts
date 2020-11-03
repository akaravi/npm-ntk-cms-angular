import { EnumDeviceType } from '../../models/enums/enumDeviceType';
import { EnumOperatingSystemType } from '../../models/enums/enumOperatingSystemType';

export class TokenDeviceClientInfoDtoModel {
  SecurityKey: string;
  ClientMACAddress: string;
  OSType: EnumOperatingSystemType;
  DeviceType: EnumDeviceType;
  PackageName: string;
}
