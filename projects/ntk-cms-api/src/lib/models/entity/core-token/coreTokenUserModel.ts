import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
import { BaseEntity } from '../base/baseEntity';

export class CoreTokenUserModel  extends BaseEntity<string>   {
  LinkUserId: number;
  LinkMemberUserId: number;
  LinkSiteId: number;
  DeviceClientMAC: string;
  LinkDeviceId: number;
  LinkApplicationId: number;
  Token: string;
  ExpireDate: Date;
  UserAccessAreaType: EnumManageUserAccessAreaTypes;
  UserAccessUserType: EnumManageUserAccessUserTypes;
  UserAccessAreaTypeTitle: string;
  UserAccessUserTypeTitle: string;
  UserAccessAdminAllowToAllData: boolean;
  UserAccessAdminAllowToProfessionalData: boolean;
  RememberOnDevice: boolean;
  BrowserLanguage: string;
  UserLanguage: number;

}
