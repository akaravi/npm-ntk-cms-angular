import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';

export class NewsCommentModel extends BaseModuleEntity<number> {
  LinkContentId: number;
  LinkParentId: number;
  Writer: string;
  Comment: string;
  RegisterDate: Date;
  SumLikeClick: number;
  SumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: NewsContentModel;
  Content: NewsContentModel;
}
