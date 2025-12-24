import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainMessageCategoryModel } from './smsMainMessageCategoryModel';
//@@tag-Version-2201011
/**
 * مدل محتوای پیام اصلی پیامک
 */
export class SmsMainMessageContentModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** متن پیام */
  messageBody: string;
  /** دسته‌بندی (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Category: SmsMainMessageCategoryModel;
  /** دسته‌بندی */
  category: SmsMainMessageCategoryModel;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId?: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
