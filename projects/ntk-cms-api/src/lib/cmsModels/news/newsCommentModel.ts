import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsCommentModel extends BaseModuleEntity<number> {
  linkContentid: number;
  linkParentId?: any;
  writer?: any;
  comment?: any;
  registerDate?: any;
  sumLikeClick: number;
  sumDisLikeClick: number;
  virtual_Content?: any;
  Content?: any;
}
