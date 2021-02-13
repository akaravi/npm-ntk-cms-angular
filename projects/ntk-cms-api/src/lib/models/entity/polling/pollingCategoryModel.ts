
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './pollingContentModel';

export class PollingCategoryModel extends BaseModuleEntity<number>  {
  Title: string;
  TitleResourceLanguage: string;
  Description: string;
  FontIcon: string;
  LinkParentIdNode: string;
  LinkParentId: number;
  Children: PollingCategoryModel[];
  Category: PollingCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  Contents: PollingContentModel[];
  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
