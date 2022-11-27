import { BaseEntity } from '../base/baseEntity';
import { EnumUserActivateTypes } from '../../enums/base/enumUserActivateTypes';
//@@tag-Version-2201011
export class CoreTokenActivationModel extends BaseEntity<string>  {
  activateType: EnumUserActivateTypes;
  linkUserId?: number;
  linkSiteId?: number;
  username: string;
  email: string;
  mobile: string;
  activateCode: string;
  activateShortCode: string;
  useed: boolean;
}


