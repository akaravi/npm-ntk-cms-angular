
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainMessageContentModel } from './smsMainMessageContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی پیام اصلی پیامک
 */
export class SmsMainMessageCategoryModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** عنوان به زبان منبع */
  titleResourceLanguage: string;
  /** تعداد محتوا */
  contentCount: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** گره شناسه والد */
  linkParentIdNode: string;
  /** لینک به شناسه والد */
  linkParentId: string;
  /** لیست دسته‌بندی‌های فرزند */
  children: SmsMainMessageCategoryModel[];
  /** دسته‌بندی والد */
  category: SmsMainMessageCategoryModel;
  /** دسته‌بندی والد (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Category: SmsMainMessageCategoryModel;
  /** لیست محتواها */
  contents: SmsMainMessageContentModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
