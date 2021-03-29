import { EnumOperatingSystemType } from '../../enums/enumOperatingSystemType';
import { EnumDeviceType } from '../../enums/enumDeviceType';
import { CoreSiteModel } from './coreSiteModel';
import { BaseEntity } from '../base/baseEntity';


export class CoreDeviceModel extends BaseEntity<number>  {
    SecurityKey: string;
    ExpireDate?: Date;
    Description: string;
    OSType: EnumOperatingSystemType;
    DeviceType: EnumDeviceType;
    PackageName: string;
    DeviceIPsAllow: string;
    LinkApplicationId?: number;
    LinkSiteId: number;
    // tslint:disable-next-line: variable-name
    virtual_CmsSite: CoreSiteModel;
    CmsSite: CoreSiteModel;
}

