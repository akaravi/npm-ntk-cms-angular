import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsContentModel } from './newsContentModel';

export class NewsContentOtherInfoModel extends BaseModuleEntity<number> {
  title: string;
  htmlBody: string;
  source: string;
  linkContentId: number;
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: NewsContentModel;
  content: NewsContentModel;
}
