import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessControllerTypes } from '../../enums/enumManageUserAccessControllerTypes';


export class TokenInfoModel {

    Token: string;
    DeviceToken: string;
    RefreshToken: string;
    TokenExpireDate: string;
    SiteId: number;
    UserId: number;
    MemberId: number;
    DeviceId: number;
    ApplicationId: number;
    UserGroupId: number;
    UserTypeTitle: string;
    UserAccessAdminAllowToProfessionalData: boolean;
    UserAccessAdminAllowToAllData: boolean;
    UserType: EnumManageUserAccessControllerTypes;
    UserAccessAreaType: EnumManageUserAccessAreaTypes;
    Username: string;
    Name: string;
    LastName: string;
    FullName: string;
    Language: string;
    Domain: string;
    SubDomain: string;
    Title: string;
    PhotoUrl: string;
    MobileConfirmed: boolean;
    EmailConfirmed: boolean;
    LinkMainImageIdSrc: string;
}
