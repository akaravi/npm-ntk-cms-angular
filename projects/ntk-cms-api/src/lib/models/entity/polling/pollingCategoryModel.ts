
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './pollingContentModel';

export class PollingCategoryModel extends BaseModuleEntity<number>  {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: number;
  children: PollingCategoryModel[];
  category: PollingCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  contents: PollingContentModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
