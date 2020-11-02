import { EnumDeviceType } from '../../cmsModels/Enums/enumDeviceType';
import { EnumOperatingSystemType } from '../../cmsModels/Enums/enumOperatingSystemType';

export class TokenDeviceClientInfoDtoModel {
  SecurityKey: string;
  ClientMACAddress: string;
  OSType: EnumOperatingSystemType;
  DeviceType: EnumDeviceType;
  PackageName: string;
}
