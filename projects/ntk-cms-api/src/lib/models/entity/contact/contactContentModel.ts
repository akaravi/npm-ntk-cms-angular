import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ContactContentCategoryModel } from './contactContentCategoryModel';
//@@tag-Version-2201011
/**
 * مدل محتوای مخاطب
 */
export class ContactContentModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** نام */
  firstName: string;
  /** نام خانوادگی */
  lastName: string;
  /** شماره‌ها */
  numbers: string;
  /** تعداد شماره‌های محتوا */
  countNumber: number;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** مخفی نگهداشتن شماره */
  numberHidden: boolean;
  /** دسته‌بندی‌های محتوا */
  contentCategores: ContactContentCategoryModel[];
  /** ایمیل */
  email: string;
  /** سازمان */
  organization: string;
  /** عنوان شغلی */
  jobTitle: string;
  /** یادداشت‌ها */
  notes: string;
}
