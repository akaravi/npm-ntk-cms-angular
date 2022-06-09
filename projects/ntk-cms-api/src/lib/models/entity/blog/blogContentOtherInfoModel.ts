import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BlogContentModel } from './blogContentModel';

export class BlogContentOtherInfoModel extends BaseModuleEntity<number> {
  title: string;
  htmlBody: string;
  source: string;
  linkContentId: number;
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BlogContentModel;
  content: BlogContentModel;
}
