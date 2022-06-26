import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainMessageCategoryModel } from './smsMainMessageCategoryModel';



export class SmsMainMessageContentModel extends BaseModuleEntity<string> {

  title: string;
  numbers: string;

  // tslint:disable-next-line: variable-name
  virtual_Category: SmsMainMessageCategoryModel;
  category: SmsMainMessageCategoryModel;

  linkCategoryId?: string;

  linkMainImageId?: number;
  linkMainImageIdSrc: string;

}
