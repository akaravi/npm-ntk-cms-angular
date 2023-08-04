import { EnumManageUserAccessAreaTypes } from '../../enums/base/manageUserAccessAreaTypesEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenUserBadLoginModel extends BaseEntity<string>  {
  userAccessAreaType: EnumManageUserAccessAreaTypes;
  deviceClientMAC: string;
  linkDeviceId?: number;
  linkApplicationId?: number;
  requestDate: string;
  usedUsername: string;
  usedPwd: string;
  linkUserId?: number;
  linkSiteId?: number;

  linkMemberId: string;
}
