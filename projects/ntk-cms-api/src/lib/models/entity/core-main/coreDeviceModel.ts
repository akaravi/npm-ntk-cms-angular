import { EnumOperatingSystemType } from '../../enums/base/enumOperatingSystemType';
import { EnumDeviceType } from '../../enums/base/enumDeviceType';
import { CoreSiteModel } from './coreSiteModel';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreDeviceModel extends BaseEntity<number>  {
    securityKey: string;
    expireDate?: Date;
    description: string;
    oSType: EnumOperatingSystemType;
    deviceType: EnumDeviceType;
    packageName: string;
    deviceIPsAllow: string;
    linkApplicationId?: number;
    linkSiteId: number;
    // tslint:disable-next-line: variable-name
    virtual_CmsSite: CoreSiteModel;
    cmsSite: CoreSiteModel;
}

