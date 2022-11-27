import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentModel } from './chartContentModel';
//@@tag-Version-2201011
export class ChartCommentModel extends BaseModuleEntity<number> {
  linkContentId: number;
  linkParentId: number;
  writer: string;
  comment: string;
  registerDate: Date;
  sumLikeClick: number;
  sumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ChartContentModel;
  content: ChartContentModel;
}
