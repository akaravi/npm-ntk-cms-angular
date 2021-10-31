import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPublicConfigModel extends BaseModuleEntity<string> {
  Title: string;
  ClassName: string;
  WebServiceUrl: string;
  PublicConfigJsonValues: string;
  Memo: string;
  PrivateSiteConfigs: SmsMainApiPathModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
