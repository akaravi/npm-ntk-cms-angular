import { DeviceTypeEnum } from '../../enums/base/deviceTypeEnum';
import { OperatingSystemTypeEnum } from '../../enums/base/operatingSystemTypeEnum';
import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';
//@@tag-Version-2201011
export class CoreDeviceModel extends BaseEntity<number> {
    securityKey: string;
    expireDate?: Date;
    description: string;
    osType: OperatingSystemTypeEnum;
    deviceType: DeviceTypeEnum;
    packageName: string;
    deviceIPsAllow: string;
    linkApplicationId?: number;
    linkSiteId: number;
    // tslint:disable-next-line: variable-name
    virtual_CmsSite: CoreSiteModel;
    cmsSite: CoreSiteModel;
}

