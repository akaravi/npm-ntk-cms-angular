import { BaseModuleEntity } from '../base/baseModuleEntity';

export class NewsCommentModel extends BaseModuleEntity<number> {
  linkContentid: number;
  linkParentId?: any;
  writer?: any;
  comment?: any;
  registerDate?: any;
  sumLikeClick: number;
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content?: any;
  Content?: any;
}
