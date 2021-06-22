import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentModel } from './chartContentModel';

export class ChartCommentModel extends BaseModuleEntity<number> {
  LinkContentId: number;
  LinkParentId: number;
  Writer: string;
  Comment: string;
  RegisterDate: Date;
  SumLikeClick: number;
  SumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ChartContentModel;
  Content: ChartContentModel;
}
