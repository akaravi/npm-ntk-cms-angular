import { BuildStatusTypeEnum } from '../../enums/base/buildStatusTypeEnum';
import { LanguageEnum } from '../../enums/base/languageEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { ApplicationLayoutValueModel } from './applicationLayoutValueModel';
import { ApplicationSourceModel } from './applicationSourceModel';
import { ApplicationThemeConfigModel } from './applicationThemeConfigModel';
/**
 * مدل اپلیکیشن موبایل
 */
//@@tag-Version-2201011
export class ApplicationAppModel extends BaseModuleEntity<number> {
  /** کلید اپلیکیشن */
  appKey: string;
  /** زبان */
  lang: LanguageEnum;
  /** تاریخ انقضا */
  expireDate?: Date;
  /** لینک به شناسه فایل آیکن */
  linkFileIdIcon?: number;
  /** لینک به شناسه فایل لوگو */
  linkFileIdLogo?: number;
  /** لینک به شناسه فایل صفحه اسپلش */
  linkFileIdSplashScreen?: number;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;

  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** نسخه اپلیکیشن */
  appVersion: number;
  /** آیا منتشر شده است */
  isPublished: boolean;
  /** لینک به شناسه منبع */
  linkSourceId: number;
  // tslint:disable-next-line: variable-name
  /** منبع اپلیکیشن (مجازی) */
  virtual_Source: ApplicationSourceModel;
  /** منبع اپلیکیشن */
  source: ApplicationSourceModel;
  /** تعداد دانلود */
  downloadCount: number;
  /** آیا کاربر سراسری است */
  isGlobalUser: boolean;
  /** بررسی به‌روزرسانی */
  checkUpdate: boolean;
  /** اجبار به به‌روزرسانی */
  forceUpdate: boolean;
  /** اجازه اشتراک مستقیم */
  allowDirectShareApp: boolean;
  /** کلید آخرین بیلد اپلیکیشن */
  lastBuildAppKey: string;
  /** وضعیت آخرین بیلد */
  lastBuildStatus: BuildStatusTypeEnum;
  /** تاریخ سفارش آخرین اعلان */
  lastNotificationOrderDate?: Date;
  /** تاریخ سفارش آخرین بیلد */
  lastBuildOrderDate?: Date;
  /** تاریخ اجرای آخرین بیلد */
  lastBuildRunDate?: Date;
  /** تاریخ پایان آخرین بیلد */
  lastBuildEndDate?: Date;
  /** پیام خطای آخرین بیلد */
  lastBuildErrorMessage: string;
  /** تاریخ آخرین بیلد موفق */
  lastSuccessfullyBuildDate?: Date;
  /** لیست مقادیر لایوت */
  layoutValues: ApplicationLayoutValueModel[];
  /** تعداد بیلد */
  buildCount?: number;
  /** لینک به شناسه تنظیمات تم */
  linkThemeConfigId: number;
  // tslint:disable-next-line: variable-name
  /** تنظیمات تم (مجازی) */
  virtual_ThemeConfig: ApplicationThemeConfigModel;
  /** تنظیمات تم */
  themeConfig: ApplicationThemeConfigModel;
  /** مقادیر JSON تنظیمات بیلدر ادمین */
  configBuilderAdminJsonValues: string;
  /** مقادیر JSON تنظیمات ران‌تایم ادمین */
  configRuntimeAdminJsonValues: string;
  /** مقادیر JSON تنظیمات بیلدر سایت */
  configBuilderSiteJsonValues: string;
  /** مقادیر JSON تنظیمات ران‌تایم سایت */
  configRuntimeSiteJsonValues: string;
  /** تعداد کلیک */
  scoreClick: number;
  /** مجموع درصد امتیاز */
  scoreSumPercent: number;
  /** فرمت فرم تنظیمات ادمین */
  adminConfigFormFormatter: GetPropertiesInfoModel[];
  /** فرمت فرم تنظیمات کاربر */
  userConfigFormFormatter: GetPropertiesInfoModel[];
  /** مقادیر JSON تنظیمات تم */
  themeConfigJsonValues: string;
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

  /** آدرس دانلود سفارشی */
  downloadLinkSrcCustomize: string;
  /** آدرس دانلود */
  downloadLinkSrc: string;
  /** آدرس دانلود به‌روزرسانی */
  downloadLinkUpdateSrc: string;
  /** کد QR Base64 آدرس دانلود */
  downloadLinkSrcQRCodeBase64: string;
  /** آدرس فایل صفحه اسپلش */
  linkFileIdSplashScreenSrc: string;
  /** مورد علاقه */
  favorited: boolean;
  /** امتیاز داده شده */
  scored: boolean;
  /** عنوان درباره ما */
  aboutUsTitle: string;
  /** توضیحات درباره ما */
  aboutUsDescription: string;
  /** تلفن درباره ما */
  aboutUsTel: string;
  /** موبایل درباره ما */
  aboutUsMobile: string;
  /** فکس درباره ما */
  aboutUsFax: string;
  /** ایمیل درباره ما */
  aboutUsEmail: string;
  /** آدرس درباره ما */
  aboutUsAddress: string;
  /** لینک به شناسه تصویر درباره ما */
  aboutUsLinkImageId?: number;
  /** آدرس تصویر درباره ما */
  aboutUsLinkImageIdSrc: string;
  /** عرض جغرافیایی درباره ما */
  aboutUsGeolocationlatitude: number;
  /** طول جغرافیایی درباره ما */
  aboutUsGeolocationlongitude: number;
  /** لینک فیسبوک درباره ما */
  aboutUsLinkFacebook: string;
  /** لینک توییتر درباره ما */
  aboutUsLinkTwitter: string;
  /** لینک گوگل پلاس درباره ما */
  aboutUsLinkGooglePlus: string;
  /** لینک اینستاگرام درباره ما */
  aboutUsLinkInstagram: string;
  /** لینک واتساپ درباره ما */
  aboutUsLinkWhatsapp: string;
  /** لینک لینکدین درباره ما */
  aboutUsLinklinkedin: string;
  /** لینک یاهو درباره ما */
  aboutUsLinkYahoo: string;
  /** لینک یوتیوب درباره ما */
  aboutUsLinkYoutube: string;
  /** لینک تلگرام درباره ما */
  aboutUsLinkTelegram: string;
  /** لینک پینترست درباره ما */
  aboutUsLinkPinterest: string;
  /** لینک RSS درباره ما */
  aboutUsLinkRss: string;
  /** متن HTML سیاست حریم خصوصی درباره ما */
  aboutUsPrivacyPolicyHtmlBody: string;
  /** آدرس فایل آیکن */
  linkFileIdIconSrc: string;
  /** آدرس فایل لوگو */
  linkFileIdLogoSrc: string;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;

}
