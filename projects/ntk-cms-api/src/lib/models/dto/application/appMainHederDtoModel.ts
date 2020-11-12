import { EnumDeviceStatus } from '../../enums/enumDeviceStatus';

export class AppMainHederDtoModel {

    DeviceId: string;
    DeviceBrand: string;
    NotificationId: string;
    DeviceIP: string;
    LocationLong: string;
    LocationLat: string;
    Country: string;
    DeviceStatus: EnumDeviceStatus;
    SimCard: string;
    Language: string;
    AppSourceVer: string;
    AppBuildVer: number;
    PackageName: string;
    Layout: string;
    Token: string;
}

