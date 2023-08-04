import { EnumManageUserAccessAreaTypes } from '../../enums/base/manageUserAccessAreaTypesEnum';
import { EnumManageUserAccessUserTypes } from '../../enums/base/manageUserAccessUserTypesEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenUserModel extends BaseEntity<string>   {
  linkUserId: number;
  linkMemberId: string;
  linkSiteId: number;
  deviceClientMAC: string;
  linkDeviceId: number;
  linkApplicationId: number;
  token: string;
  tokenExpireDate: Date;
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
