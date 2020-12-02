import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';

export class ArticleContentOtherInfoModel extends BaseModuleEntity<number> {
  Title: string;
  HtmlBody: string;
  Source: string;
  LinkContentId: number;
  TypeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ArticleContentModel;
  Content: ArticleContentModel;
}
