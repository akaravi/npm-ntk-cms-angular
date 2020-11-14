import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';

export class NewsContentOtherInfoModel extends BaseModuleEntity<number> {
  Title: string;
  HtmlBody: string;
  Source: string;
  LinkContentId: number;
  TypeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: NewsContentModel;
  Content: NewsContentModel;
}
