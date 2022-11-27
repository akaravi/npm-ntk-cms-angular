import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentModel } from './blogContentModel';
//@@tag-Version-2201011
export class BlogCommentModel extends BaseModuleEntity<number> {
  linkContentId: number;
  linkParentId: number;
  writer: string;
  comment: string;
  registerDate: Date;
  sumLikeClick: number;
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BlogContentModel;
  content: BlogContentModel;
}
