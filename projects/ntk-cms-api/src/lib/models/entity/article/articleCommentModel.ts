import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';

export class ArticleCommentModel extends BaseModuleEntity<number> {
  LinkContentId: number;
  LinkParentId: number;
  Writer: string;
  Comment: string;
  RegisterDate: Date;
  SumLikeClick: number;
  SumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ArticleContentModel;
  Content: ArticleContentModel;
}
