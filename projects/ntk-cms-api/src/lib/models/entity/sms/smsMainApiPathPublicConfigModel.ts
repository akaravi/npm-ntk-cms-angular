import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
export class SmsMainApiPathPublicConfigModel extends BaseModuleEntity<string> {
  title: string;
  className: string;
  webServiceUrl: string;
  publicConfigJsonValues: string;
  memo: string;
  abilityCreditCheck: boolean;
  abilityDelivery: boolean;
  abilityReceive: boolean;
  privateSiteConfigs: SmsMainApiPathModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
