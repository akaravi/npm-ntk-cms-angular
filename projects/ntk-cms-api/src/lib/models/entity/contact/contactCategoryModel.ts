
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactContentCategoryModel } from './contactContentCategoryModel';
import { ContactContentModel } from './contactContentModel';
//@@tag-Version-2201011
/**
 * مدل دسته‌بندی مخاطب
 */
export class ContactCategoryModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** عنوان منبع زبان */
  titleResourceLanguage: string;

  /** تعداد محتوا */
  contentCount: number;
  /** تعداد شماره‌های محتوا */
  contentCountNumber: number;
  /** توضیحات */
  description: string;
  /** آیکن فونت */
  fontIcon: string;
  /** گره والد */
  linkParentIdNode: string;
  /** لینک به شناسه والد */
  linkParentId: string;
  /** فرزندان */
  children: ContactCategoryModel[];
  /** دسته‌بندی‌های محتوا */
  ContentCategores: ContactContentCategoryModel[];

  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** مخفی نگهداشتن شماره */
  numberHidden: boolean;
}
