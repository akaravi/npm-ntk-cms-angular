import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathPublicConfigModel extends BaseModuleEntity<number> {
  Title: string;
  ClassName: string;
  WebServiceUrl: string;
  PublicConfigJsonValues: string;
  Memo: string;
}
