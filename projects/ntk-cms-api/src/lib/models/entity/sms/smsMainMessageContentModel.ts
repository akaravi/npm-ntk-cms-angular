import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainMessageCategoryModel } from './smsMainMessageCategoryModel';
//@@tag-Version-2201011
export class SmsMainMessageContentModel extends BaseModuleEntity<string> {

  title: string;
  messageBody: string;

  // tslint:disable-next-line: variable-name
  virtual_Category: SmsMainMessageCategoryModel;
  category: SmsMainMessageCategoryModel;

  linkCategoryId?: string;

  linkMainImageId?: number;
  linkMainImageIdSrc: string;

}
