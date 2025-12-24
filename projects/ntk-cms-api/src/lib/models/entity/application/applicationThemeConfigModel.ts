import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationSourceModel } from './applicationSourceModel';
import { ThemeConfigLayoutModel } from './themeConfigLayoutModel';
/**
 * مدل تنظیمات تم اپلیکیشن
 */
//@@tag-Version-2201011
export class ApplicationThemeConfigModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** عنوان چندزبانه */
  titleML: string;
  /** عنوان منبع زبان */
  titleResourceLanguage: string;
  /** شناسه نوع */
  typeId: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** لینک به شناسه منبع */
  linkSourceId?: number;
  // tslint:disable-next-line: variable-name
  /** منبع (مجازی) */
  virtual_Source: ApplicationSourceModel;
  /** منبع */
  source: ApplicationSourceModel;
  /** مقادیر JSON تنظیمات بیلدر تم */
  themeConfigBuilderJsonValues: string;
  /** مقادیر JSON تنظیمات ران‌تایم تم */
  themeConfigRuntimeJsonValues: string;
  /** مقادیر JSON تنظیمات لایوت تم */
  themeConfigLayoutJsonValues: string;
  /** مقادیر JSON تنظیمات تم */
  themeConfigJsonValues: string;
  /** لیست لایوت‌های تنظیمات تم */
  themeConfigLayouts: ThemeConfigLayoutModel[];
  /** لیست اپلیکیشن‌ها */
  applications: ApplicationAppModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
