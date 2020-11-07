import { EnumManageUserAccessAreaTypes } from '../../Enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessControllerTypes } from '../../Enums/enumManageUserAccessControllerTypes';
import { BaseEntity } from '../base/baseEntity';
export class CoreTokenLogModel  extends BaseEntity<string>  {


    description: string;
    linkUserId: number;
    linkMemberUserId: number;
    linkSiteId: number;
    deviceClientMAC: string;
    linkDeviceId: number;
    token: string;
    expireDate: string;
    userAccessAreaType: EnumManageUserAccessAreaTypes;
    userType: EnumManageUserAccessControllerTypes;
    userAccessAdminAllowToAllData: boolean;
    userAccessAdminAllowToProfessionalData: boolean;
    rememberOnDevice: boolean;
    browserLanguage: string;
    userLanguage: number;
}


