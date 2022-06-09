import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPublicConfigModel extends BaseModuleEntity<string> {
  title: string;
  className: string;
  webServiceUrl: string;
  publicConfigJsonValues: string;
  memo: string;
  privateSiteConfigs: SmsMainApiPathModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
