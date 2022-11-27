import { EnumManageUserAccessAreaTypes } from '../../enums/base/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessUserTypes } from '../../enums/base/enumManageUserAccessUserTypes';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenUserModel  extends BaseEntity<string>   {
  linkUserId: number;
  linkMemberId: string;
  linkSiteId: number;
  deviceClientMAC: string;
  linkDeviceId: number;
  linkApplicationId: number;
  token: string;
  expireDate: Date;
  userAccessAreaType: EnumManageUserAccessAreaTypes;
  userAccessUserType: EnumManageUserAccessUserTypes;
  userAccessAreaTypeTitle: string;
  userAccessUserTypeTitle: string;
  userAccessAdminAllowToAllData: boolean;
  userAccessAdminAllowToProfessionalData: boolean;
  rememberOnDevice: boolean;
  browserLanguage: string;
  userLanguage: number;

}
