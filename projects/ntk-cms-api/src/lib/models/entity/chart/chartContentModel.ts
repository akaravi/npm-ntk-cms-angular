import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ChartCategoryModel } from './chartCategoryModel';
import { ChartCommentModel } from './chartCommentModel';
import { ChartContentCategoryModel } from './chartContentCategoryModel';
import { ChartContentSimilarModel } from './chartContentSimilarModel';
import { ChartContentTagModel } from './chartContentTagModel';
//@@tag-Version-2201011
/**
 * مدل محتوای چارت
 */
export class ChartContentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
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
  /** کامنت‌ها */
  comments: ChartCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ChartCategoryModel;
  /** دسته‌بندی */
  category: ChartCategoryModel;
  /** تگ‌های محتوا */
  contentTags: ChartContentTagModel[];
  /** موارد مشابه */
  similars: ChartContentSimilarModel[];
  /** دسته‌بندی‌های محتوا */
  contentCategores: ChartContentCategoryModel[];

  /** سایر اطلاعات */
  otherInfos: string;
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
