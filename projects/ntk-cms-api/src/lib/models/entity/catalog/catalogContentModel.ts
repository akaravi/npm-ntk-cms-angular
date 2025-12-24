import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
import { CatalogCategoryModel } from './catalogCategoryModel';
import { CatalogContentOtherInfoModel } from './catalogContentOtherInfoModel';
import { CatalogContentPageModel } from './catalogContentPageModel';

//@@tag-Version-2201011
/**
 * مدل محتوای کاتالوگ
 */
export class CatalogContentModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** بدنه */
  body: string;
  /** از تاریخ */
  fromDate: Date;
  /** عرض جغرافیایی */
  geolocationlatitude?: number;
  /** طول جغرافیایی */
  geolocationlongitude?: number;
  /** لینک به شناسه موقعیت جغرافیایی */
  linkLocationId?: number;
  /** عنوان موقعیت جغرافیایی */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت جغرافیایی */
  linkLocationIdParentTitle: string;
  /** کلمه کلیدی */
  keyword: string;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** لینک به شناسه فایل پادکست */
  linkFilePodcastId?: number;
  /** لینک به شناسه فایل ویدئو */
  linkFileMovieId?: number;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** نمایش‌های 360 */
  file360Views: File360ViewModel[];
  /** تور 360 */
  file360Tour: File360TourModel;
  /** تعداد کلیک امتیاز */
  scoreClick: number;
  /** مجموع درصد امتیاز */
  scoreSumPercent: number;
  /** تعداد بازدید */
  viewCount: number;
  /** مورد علاقه */
  favorited: boolean;

  /** تاریخ انقضا */
  expireDate: Date;
  /** ایجاد شده توسط ماژول Core */
  moduleCoreCreatedBy: string;
  /** به‌روزرسانی شده توسط ماژول Core */
  moduleCoreUpdatedBy: string;
  /** منبع */
  source: string;

  // tslint:disable-next-line: variable-name
  virtual_Category: CatalogCategoryModel;
  /** دسته‌بندی */
  category: CatalogCategoryModel;
  /** لیست شناسه‌های دسته‌بندی محتوا */
  linkContentCategoryIds: string[];
  /** سایر اطلاعات */
  otherInfos: CatalogContentOtherInfoModel[];
  /** صفحات محتوا */
  contentPages: CatalogContentPageModel[];
  /** مقادیر پارامتر و محتوا */
  contentAndParameterValues: any;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل پادکست */
  linkFilePodcastIdSrc: string;
  /** آدرس فایل ویدئو */
  linkFileMovieIdSrc: string;
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
  /** آدرس مشاهده محتوا */
  urlViewContent: string;
  /** آدرس کوتاه مشاهده محتوا */
  urlViewContentShort: string;
  /** کد QR Base64 مشاهده محتوا */
  urlViewContentQRCodeBase64: string;
}
