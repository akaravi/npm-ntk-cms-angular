import { UserActivateTypesEnum } from '../../enums/base/userActivateTypesEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenActivationModel extends BaseEntity<string> {
  activateType: UserActivateTypesEnum;
  linkUserId?: number;
  linkSiteId?: number;
  username: string;
  email: string;
  mobile: string;
  activateCode: string;
  activateShortCode: string;
  useed: boolean;
}


