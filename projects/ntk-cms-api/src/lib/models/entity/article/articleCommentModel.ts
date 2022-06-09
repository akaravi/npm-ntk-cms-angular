import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleContentModel } from './articleContentModel';

export class ArticleCommentModel extends BaseModuleEntity<number> {
  linkContentId: number;
  linkParentId: number;
  writer: string;
  comment: string;
  registerDate: Date;
  sumLikeClick: number;
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ArticleContentModel;
  content: ArticleContentModel;
}
