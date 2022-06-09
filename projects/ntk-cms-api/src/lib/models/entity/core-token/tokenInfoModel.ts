import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
export class TokenInfoModel {

  token: string;
  deviceToken: string;
  refreshToken: string;
  tokenExpireDate: Date;
  siteId: number;
  userId: number;
  memberId: number;
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
