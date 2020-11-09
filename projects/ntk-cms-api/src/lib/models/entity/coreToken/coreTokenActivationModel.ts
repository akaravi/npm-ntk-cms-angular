import { BaseEntity } from '../base/baseEntity';
import { EminUserActivateTypes } from '../../Enums/eminUserActivateTypes';

export class CoreTokenActivationModel extends BaseEntity<string>  {
  ActivateType: EminUserActivateTypes;
  LinkUserId?: number;
  LinkSiteId?: number;
  Username: string;
  Email: string;
  Mobile: string;
  ActivateCode: string;
  ActivateShortCode: string;
  Useed: boolean;
}


