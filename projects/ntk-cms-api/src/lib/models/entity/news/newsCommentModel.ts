import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';

export class NewsCommentModel extends BaseModuleEntity<number> {
  linkContentId: number;
  linkParentId: number;
  writer: string;
  comment: string;
  registerDate: Date;
  sumLikeClick: number;
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: NewsContentModel;
  content: NewsContentModel;
}
