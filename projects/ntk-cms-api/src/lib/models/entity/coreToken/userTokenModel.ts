import { EnumManageUserAccessControllerTypes } from '../../Enums/enumManageUserAccessControllerTypes';
import { EnumManageUserAccessAreaTypes } from '../../Enums/enumManageUserAccessAreaTypes';
import { BaseEntity } from '../base/baseEntity';
export class UserTokenModel extends BaseEntity<string>   {

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
