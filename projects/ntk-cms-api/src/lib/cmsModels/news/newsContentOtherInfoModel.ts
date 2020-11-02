import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentOtherInfoModel extends BaseModuleEntity<number> {
  title?: any;
  htmlBody?: any;
  source?: any;
  linkContentid: number;
  typeId?: any;
  // tslint:disable-next-line: variable-name
  virtual_Content: any;
  Content?: any;
}
