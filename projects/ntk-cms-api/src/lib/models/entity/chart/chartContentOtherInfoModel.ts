import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartContentModel } from './chartContentModel';

export class ChartContentOtherInfoModel extends BaseModuleEntity<number> {
  Title: string;
  HtmlBody: string;
  Source: string;
  LinkContentId: number;
  TypeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: ChartContentModel;
  Content: ChartContentModel;
}
