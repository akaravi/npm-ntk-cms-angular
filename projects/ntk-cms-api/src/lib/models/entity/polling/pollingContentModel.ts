import { BaseModuleEntity } from '../base/baseModuleEntity';
import { PollingCategoryModel } from './pollingCategoryModel';
import { PollingOptionModel } from './pollingOptionModel';
//@@tag-Version-2201011
/**
 * مدل محتوای نظرسنجی
 */
export class PollingContentModel extends BaseModuleEntity<number> {
  /** تاریخ انقضا */
  expireDate?: Date;
  /** عنوان */
  title: string;
  /** سوال */
  question: string;

  /** نمایش آمار قبل از رای دادن */
  viewStatisticsBeforeVote: boolean;
  /** نمایش آمار بعد از رای دادن */
  viewStatisticsAfterVote: boolean;
  /** دسته‌بندی نظرسنجی (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_Category: PollingCategoryModel;
  /** دسته‌بندی نظرسنجی */
  category: PollingCategoryModel;
  /** از تاریخ */
  fromDate?: string;
  /** موقعیت عرض جغرافیایی */
  geolocationlatitude?: number;
  /** موقعیت طول جغرافیایی */
  geolocationlongitude?: number;
  /** لینک به شناسه موقعیت جغرافیایی */
  linkLocationId?: number;
  /** عنوان موقعیت جغرافیایی */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت جغرافیایی */
  linkLocationIdParentTitle: string;
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId?: number;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** لینک به شناسه فایل پادکست */
  linkFilePodcastId?: number;
  /** لینک به شناسه فایل ویدیو */
  linkFileMovieId?: number;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** تعداد مجموع آرا */
  scoreClick: number;
  /** مجموع امتیازهای داده شده در آراها */
  scoreSumPercent: number;
  /** تعداد بازدید */
  viewCount: number;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل پادکست */
  linkFilePodcastIdSrc: string;
  /** آدرس فایل ویدیو */
  linkFileMovieIdSrc: string;
  /** لیست آدرس فایل‌ها */
  linkFileIdsSrc: string[];
  /** حداکثر رای برای این محتوا */
  maxVoteForThisContent: number;
  /** حداکثر رای دادن برای هر گزینه */
  maxVoteForEachOption: number;
  /** لیست گزینه‌های نظرسنجی */
  options: PollingOptionModel[];
}
