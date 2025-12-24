
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingContentModel } from './pollingContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی نظرسنجی
 */
export class PollingCategoryModel extends BaseModuleEntity<number> {
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
  /** شناسه گره والد در ساختار سلسله مراتبی */
  linkParentIdNode: string;
  /** لینک به شناسه دسته‌بندی والد */
  linkParentId: number;
  /** لیست دسته‌بندی‌های فرزند */
  children: PollingCategoryModel[];
  /** دسته‌بندی والد */
  category: PollingCategoryModel;
  /** دسته‌بندی والد (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  /** لیست محتواهای نظرسنجی */
  contents: PollingContentModel[];
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
