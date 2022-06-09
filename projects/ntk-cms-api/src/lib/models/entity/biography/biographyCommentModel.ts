import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyCommentModel extends BaseModuleEntity<number> {
  linkContentId: number;
  linkParentId: number;
  writer: string;
  comment: string;
  registerDate: Date;
  sumLikeClick: number;
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BiographyContentModel;
  content: BiographyContentModel;
}
