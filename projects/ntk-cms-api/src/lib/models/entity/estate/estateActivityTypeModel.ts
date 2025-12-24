import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * نوع فعالیت ملکی برای دسته‌بندی اکشن‌ها و نمایش در UI.
 */
export class EstateActivityTypeModel extends BaseModuleEntity<string> {
  /** عنوان فعالیت. */
  title: string;
  /** عنوان چندزبانه (ML). */
  titleML: string;
  /** کلید/متن ترجمه عنوان. */
  titleResourceLanguage: string;
  /** توضیح تکمیلی فعالیت. */
  description: string;
  /** نام آیکن فونت جهت نمایش. */
  iconFont: string;
  /** رنگ آیکن. */
  iconColor: string;
  /** شناسه تصویر اصلی. */
  linkMainImageId: number;
  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;
}
