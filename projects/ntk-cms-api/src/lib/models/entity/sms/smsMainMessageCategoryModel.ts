
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainMessageContentModel } from './smsMainMessageContentModel';
//@@tag-Version-2201011
export class SmsMainMessageCategoryModel extends BaseModuleEntity<string>  {
  title: string;
  titleResourceLanguage: string;
  contentCount: number;
  description: string;
  fontIcon: string;
  linkParentIdNode: string;
  linkParentId: string;
  children: SmsMainMessageCategoryModel[];
  category: SmsMainMessageCategoryModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: SmsMainMessageCategoryModel;
  contents: SmsMainMessageContentModel[];
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
}
