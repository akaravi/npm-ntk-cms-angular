import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
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
    UserAccessUserType: EnumManageUserAccessUserTypes;
    UserAccessAreaType: EnumManageUserAccessAreaTypes;
    UserAccessUserTypeTitle: string;
    UserAccessUserAreaTitle: string;
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
