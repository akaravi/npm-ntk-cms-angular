import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathPrivateSiteConfigModel } from './smsMainApiPathPrivateSiteConfigModel';

export class SmsMainApiPathPublicConfigModel extends BaseModuleEntity<string> {
  Title: string;
  ClassName: string;
  WebServiceUrl: string;
  PublicConfigJsonValues: string;
  Memo: string;
  PrivateSiteConfigs: SmsMainApiPathPrivateSiteConfigModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
