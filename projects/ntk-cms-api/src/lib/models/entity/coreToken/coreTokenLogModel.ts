import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessControllerTypes } from '../../enums/enumManageUserAccessControllerTypes';
import { BaseEntity } from '../base/baseEntity';
export class CoreTokenLogModel  extends BaseEntity<string>  {
    Description: string;
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


