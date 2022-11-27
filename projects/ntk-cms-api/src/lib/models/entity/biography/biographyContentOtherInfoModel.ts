import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';
//@@tag-Version-2201011
export class BiographyContentOtherInfoModel extends BaseModuleEntity<number> {
  title: string;
  htmlBody: string;
  source: string;
  linkContentId: number;
  typeId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Content: BiographyContentModel;
  content: BiographyContentModel;
}
