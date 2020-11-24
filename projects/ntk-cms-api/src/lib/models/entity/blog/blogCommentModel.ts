import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentModel } from './blogContentModel';

export class BlogCommentModel extends BaseModuleEntity<number> {
  LinkContentId: number;
  LinkParentId: number;
  Writer: string;
  Comment: string;
  RegisterDate: Date;
  SumLikeClick: number;
  SumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BlogContentModel;
  Content: BlogContentModel;
}
