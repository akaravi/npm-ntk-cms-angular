import { EnumDeviceStatus } from '../../enums/base/deviceStatusEnum';

export class AppMainHederDtoModel {
    deviceId: string;
    deviceBrand: string;
    notificationId: string;
    deviceIP: string;
    locationLong: string;
    locationLat: string;
    country: string;
    deviceStatus: EnumDeviceStatus;
    simCard: string;
    language: string;
    appSourceVer: string;
    appBuildVer: number;
    packageName: string;
    layout: string;
    token: string;
}

