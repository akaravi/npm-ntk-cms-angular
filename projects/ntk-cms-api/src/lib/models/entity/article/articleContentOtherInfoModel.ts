import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';
//@@tag-Version-2201011
export class ArticleContentOtherInfoModel extends BaseModuleEntity<number> {
  title: string;
  htmlBody: string;
  source: string;
  linkContentId: number;
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ArticleContentModel;
  content: ArticleContentModel;
}
