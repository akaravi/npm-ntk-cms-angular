import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessControllerTypes } from '../../enums/enumManageUserAccessControllerTypes';
import { EnumManageUserAccessTokenTypes } from '../../enums/enumManageUserAccessTokenTypes';


export class TokenInfoModel {

    Token: string;
    DeviceToken: string;
    RefreshToken: string;
    TokenExpireDate: Date;
    SiteId: number;
    UserId: number;
    MemberId: number;
    DeviceId: number;
    ApplicationId: number;
    UserGroupId: number;
    UserAccessAdminAllowToProfessionalData: boolean;
    UserAccessAdminAllowToAllData: boolean;
    UserAccessUserType: EnumManageUserAccessControllerTypes;
    UserAccessAreaType: EnumManageUserAccessAreaTypes;
    UserAccessTokenType: EnumManageUserAccessTokenTypes;
    UserAccessUserTypeTitle: string;
    UserAccessUserAreaTitle: string;
    UserAccessUserTokenTitle: string;
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
