import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentModel } from './chartContentModel';

export class ChartContentOtherInfoModel extends BaseModuleEntity<number> {
  title: string;
  htmlBody: string;
  source: string;
  linkContentId: number;
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ChartContentModel;
  content: ChartContentModel;
}
