import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsContentOtherInfoModel extends BaseModuleEntity<number> {
  Title: string;
  HtmlBody: string;
  Source: any;
  LinkContentid: number;
  TypeId: any;
  // tslint:disable-next-line: variable-name
  virtual_Content: any;
  Content?: any;
}
