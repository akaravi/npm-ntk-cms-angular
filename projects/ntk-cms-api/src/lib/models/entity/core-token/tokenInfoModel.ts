import { EnumManageUserAccessAreaTypes } from '../../enums/base/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessUserTypes } from '../../enums/base/enumManageUserAccessUserTypes';
//@@tag-Version-2201011
export class TokenInfoModel {

  token: string;
  deviceToken: string;
  refreshToken: string;
  tokenExpireDate: Date;
  siteId: number;
  userId: number;
  memberId: number;
  memberUserId: string;
  deviceId: number;
  applicationId: number;
  userGroupId: number;
  userAccessAdminAllowToProfessionalData: boolean;
  userAccessAdminAllowToAllData: boolean;
  userAccessUserType: EnumManageUserAccessUserTypes;
  userAccessAreaType: EnumManageUserAccessAreaTypes;
  userAccessUserTypeTitle: string;
  userAccessUserAreaTitle: string;
  username: string;
  name: string;
  lastName: string;
  fullName: string;
  language: string;
  domain: string;
  subDomain: string;
  currentSiteDomainUrl: string;
  title: string;
  photoUrl: string;
  mobile: string;
  mobileConfirmed: boolean;
  email: string;
  emailConfirmed: boolean;
  linkMainImageIdSrc: string;
  direction: string ;
}
