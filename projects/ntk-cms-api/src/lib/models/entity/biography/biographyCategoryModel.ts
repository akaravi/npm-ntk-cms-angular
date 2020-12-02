import { BaseModuleEntity } from '../base/baseModuleEntity';
import { BiographyContentModel } from './biographyContentModel';

export class BiographyCategoryModel extends BaseModuleEntity<number> {
  Title: string;
  TitleResourceLanguage: string;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: BiographyCategoryModel[];
  Category: BiographyCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: BiographyCategoryModel;
  Contents: BiographyContentModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;






}
