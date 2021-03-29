import { EnumManageUserAccessControllerTypes } from '../../enums/enumManageUserAccessControllerTypes';
import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { BaseEntity } from '../base/baseEntity';
export class UserTokenModel extends BaseEntity<string>   {
    LinkUserId: number;
    LinkMemberUserId: number;
    LinkSiteId: number;
    DeviceClientMAC: string;
    LinkDeviceId: number;
    Token: string;
    ExpireDate: Date;
    UserAccessAreaType: EnumManageUserAccessAreaTypes;
    UserType: EnumManageUserAccessControllerTypes;
    UserAccessAdminAllowToAllData: boolean;
    UserAccessAdminAllowToProfessionalData: boolean;
    RememberOnDevice: boolean;
    BrowserLanguage: string;
    UserLanguage: number;
}
