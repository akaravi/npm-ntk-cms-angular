import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
import { BaseEntity } from '../base/baseEntity';

export class CoreTokenUserModel  extends BaseEntity<string>   {
  linkUserId: number;
  linkMemberUserId: number;
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
