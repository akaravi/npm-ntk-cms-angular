import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';
/**
 * مدل لایوت اپلیکیشن
 */
//@@tag-Version-2201011
export class ApplicationLayoutModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** نام کلاس */
  className: string;
  /** لینک به شناسه منبع */
  linkSourceId?: number;
  // tslint:disable-next-line: variable-name
  /** منبع (مجازی) */
  virtual_Source: ApplicationSourceModel;
  /** منبع */
  source: ApplicationSourceModel;
  /** مقادیر پیش‌فرض JSON فرم */
  jsonFormDefaultValue: string;
  /** مقادیر JSON فرم سیستم ادمین */
  jsonFormAdminSystemValue: string;
  /** لینک به شناسه تصویر پیش‌نمایش ماژول */
  linkModuleFilePreviewImageId?: number;
  /** لیست مقادیر لایوت */
  layoutValues: ApplicationLayoutValueModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
