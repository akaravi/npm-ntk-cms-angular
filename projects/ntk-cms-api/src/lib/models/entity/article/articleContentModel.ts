import { BaseModuleEntity } from '../base/baseModuleEntity';
import { ArticleCategoryModel } from './articleCategoryModel';
import { ArticleCommentModel } from './articleCommentModel';
import { ArticleContentCategoryModel } from './articleContentCategoryModel';
import { ArticleContentSimilarModel } from './articleContentSimilarModel';
import { ArticleContentTagModel } from './articleContentTagModel';
//@@tag-Version-2201011
/**
 * مدل محتوای مقاله
 */
export class ArticleContentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** بدنه */
  body: string;
  /** تاریخ شروع */
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
  /** شناسه‌های فایل */
  linkFileIds: string;
  /** لینک به شناسه فایل پادکست */
  linkFilePodcastId?: number;
  /** لینک به شناسه فایل ویدئو */
  linkFileMovieId?: number;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** تعداد کلیک */
  scoreClick: number;
  /** مجموع درصد امتیاز */
  scoreSumPercent: number;
  /** تعداد بازدید */
  viewCount: number;
  /** مورد علاقه */
  favorited: boolean;

  /** تاریخ انقضا */
  expireDate: Date;
  /** ایجاد کننده ماژول اصلی */
  moduleCoreCreatedBy: string;
  /** به‌روزرسانی کننده ماژول اصلی */
  moduleCoreUpdatedBy: string;
  /** منبع */
  source: string;
  /** نظرات */
  comments: ArticleCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: ArticleCategoryModel;
  /** دسته‌بندی */
  category: ArticleCategoryModel;
  /** تگ‌های محتوا */
  contentTags: ArticleContentTagModel[];
  /** محتواهای مشابه */
  similars: ArticleContentSimilarModel[];
  /** دسته‌بندی‌های محتوا */
  contentCategores: ArticleContentCategoryModel[];

  /** اطلاعات دیگر */
  otherInfos: string;
  /** مقادیر پارامتر محتوا */
  contentAndParameterValues: any;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل پادکست */
  linkFilePodcastIdSrc: string;
  /** آدرس فایل ویدئو */
  linkFileMovieIdSrc: string;
  /** آدرس‌های فایل */
  linkFileIdsSrc: string[];
  /** آدرس مشاهده محتوا */
  urlViewContent: string;
  /** آدرس کوتاه مشاهده محتوا */
  urlViewContentShort: string;
  /** کد QR Base64 مشاهده محتوا */
  urlViewContentQRCodeBase64: string;
}
