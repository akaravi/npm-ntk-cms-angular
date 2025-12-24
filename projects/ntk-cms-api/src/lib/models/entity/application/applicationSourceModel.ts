import { OperatingSystemTypeEnum } from '../../enums/base/operatingSystemTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ApplicationAppModel } from './applicationAppModel';
import { ApplicationLayoutModel } from './applicationLayoutModel';
import { ApplicationSourceSiteCategoryModel } from './applicationSourceSiteCategoryModel';
/**
 * مدل منبع اپلیکیشن
 */
//@@tag-Version-2201011
export class ApplicationSourceModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** عنوان چندزبانه */
  titleML: string;
  /** عنوان منبع زبان */
  titleResourceLanguage: string;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** شناسه اپلیکیشن پیش‌فرض */
  defaultAppId?: number;
  /** نام کلاس */
  className: string;
  /** نام پکیج */
  packageName: string;
  /** بررسی به‌روزرسانی */
  checkUpdate: boolean;
  /** اجبار به به‌روزرسانی */
  forceUpdate: boolean;
  /** لینک به شناسه فایل آخرین بیلد موفق */
  linkLastSuccessfullyBuildFileId?: number;
  /** تاریخ آخرین بیلد موفق */
  lastSuccessfullyBuildDate?: string;
  /** تاریخ دستور بیلد */
  lastBuildCommandDate?: string;
  /** دستور بیلد توسط */
  lastBuildCommandBy?: string;
  /** تاریخ خطای بیلد ناموفق */
  lastUnsuccessfullyBuildErrorDate?: string;
  /** پیام خطای بیلد ناموفق */
  lastUnsuccessfullyBuildErrorMessage: string;
  /** لیست لایوت‌ها */
  layouts: ApplicationLayoutModel[];
  /** لیست اپلیکیشن‌ها */
  applications: ApplicationAppModel[];
  /** لیست دسته‌بندی‌های سایت منبع */
  sourceSiteCategores: ApplicationSourceSiteCategoryModel[];
  /** کلید سرور Firebase */
  fireBaseServerKey: string;
  /** پسوند */
  extension: string;
  /** پسوند فایل به‌روزرسانی */
  extensionUpdateFile: string;
  /** مقادیر JSON پیش‌فرض تنظیمات بیلدر ادمین */
  defaultConfigBuilderAdminJsonValues: string;
  /** مقادیر JSON پیش‌فرض تنظیمات ران‌تایم ادمین */
  defaultConfigRuntimeAdminJsonValues: string;
  /** مقادیر JSON پیش‌فرض تنظیمات بیلدر سایت */
  defaultConfigBuilderSiteJsonValues: string;
  /** مقادیر JSON پیش‌فرض تنظیمات ران‌تایم سایت */
  defaultConfigRuntimeSiteJsonValues: string;
  /** رشته کلید بیلد 1 */
  buildKey1String: string;
  /** مقدار کلید بیلد 1 */
  buildKey1Value: string;
  /** فایل‌های کلید بیلد 1 */
  buildKey1Files: string;

  /** رشته کلید بیلد 2 */
  buildKey2String: string;
  /** مقدار کلید بیلد 2 */
  buildKey2Value: string;
  /** فایل‌های کلید بیلد 2 */
  buildKey2Files: string;

  /** رشته کلید بیلد 3 */
  buildKey3String: string;
  /** مقدار کلید بیلد 3 */
  buildKey3Value: string;
  /** فایل‌های کلید بیلد 3 */
  buildKey3Files: string;

  /** رشته کلید بیلد 4 */
  buildKey4String: string;
  /** مقدار کلید بیلد 4 */
  buildKey4Value: string;
  /** فایل‌های کلید بیلد 4 */
  buildKey4Files: string;

  /** رشته کلید بیلد 5 */
  buildKey5String: string;
  /** مقدار کلید بیلد 5 */
  buildKey5Value: string;
  /** فایل‌های کلید بیلد 5 */
  buildKey5Files: string;
  /** آیا منتشر شده است */
  isPublish: boolean;
  /** نام منبع Git */
  sourceNameGit: string;
  /** نوع سیستم عامل */
  osType: OperatingSystemTypeEnum;
  /** به‌روزرسانی منبع از Git */
  updateSourceByGit: boolean;
  /** قابلیت بیلد Gradle */
  isAbilityGradleBuild: boolean;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
}
