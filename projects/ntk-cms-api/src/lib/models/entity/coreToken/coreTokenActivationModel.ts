import { BaseEntity } from '../base/baseEntity';
import { EnumUserActivateTypes } from '../../enums/enumUserActivateTypes';

export class CoreTokenActivationModel extends BaseEntity<string>  {
  ActivateType: EnumUserActivateTypes;
  LinkUserId?: number;
  LinkSiteId?: number;
  Username: string;
  Email: string;
  Mobile: string;
  ActivateCode: string;
  ActivateShortCode: string;
  Useed: boolean;
}


