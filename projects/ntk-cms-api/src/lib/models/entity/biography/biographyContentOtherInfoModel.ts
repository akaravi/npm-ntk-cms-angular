import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyContentOtherInfoModel extends BaseModuleEntity<number> {
  Title: string;
  HtmlBody: string;
  Source: string;
  LinkContentId: number;
  TypeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BiographyContentModel;
  Content: BiographyContentModel;
}
