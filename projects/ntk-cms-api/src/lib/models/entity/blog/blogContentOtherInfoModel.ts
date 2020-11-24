import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentModel } from './blogContentModel';

export class BlogContentOtherInfoModel extends BaseModuleEntity<number> {
  Title: string;
  HtmlBody: string;
  Source: string;
  LinkContentId: number;
  TypeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BlogContentModel;
  Content: BlogContentModel;
}
