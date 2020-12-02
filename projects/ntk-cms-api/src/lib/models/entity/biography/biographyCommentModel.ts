import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyCommentModel extends BaseModuleEntity<number> {
  LinkContentId: number;
  LinkParentId: number;
  Writer: string;
  Comment: string;
  RegisterDate: Date;
  SumLikeClick: number;
  SumDisLikeClick: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BiographyContentModel;
  Content: BiographyContentModel;
}
