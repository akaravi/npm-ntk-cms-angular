import { BaseModuleEntity } from '../base/baseModuleEntity';
import { NewsCategoryModel } from './newsCategoryModel';
import { NewsCommentModel } from './newsCommentModel';
import { NewsContentCategoryModel } from './newsContentCategoryModel';
import { NewsContentSimilarModel } from './newsContentSimilarModel';
import { NewsContentTagModel } from './newsContentTagModel';
//@@tag-Version-2201011
/**
 * محتوای اخبار
 */
export class NewsContentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** متن محتوا */
  body: string;
  /** تاریخ شروع */
  fromDate: Date;
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
  /** کلمات کلیدی */
  keyword: string;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** شناسه فایل پادکست */
  linkFilePodcastId?: number;
  /** شناسه فایل ویدیو */
  linkFileMovieId?: number;
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** تعداد مجموع آرا */
  scoreClick: number;
  /** مجموع امتیازهای داده شده در آراها */
  scoreSumPercent: number;
  /** تعداد نمایش */
  viewCount: number;
  /** مورد علاقه است */
  favorited: boolean;

  /** تاریخ انقضا */
  expireDate: Date;
  /** ایجادکننده ماژول */
  moduleCoreCreatedBy: string;
  /** به‌روزرسانی‌کننده ماژول */
  moduleCoreUpdatedBy: string;
  /** منبع */
  source: string;
  /** کامنت */
  comments: NewsCommentModel;
  // tslint:disable-next-line: variable-name
  virtual_Category: NewsCategoryModel;
  /** دسته‌بندی */
  category: NewsCategoryModel;
  /** لیست تگ‌های محتوا */
  contentTags: NewsContentTagModel[];
  /** لیست محتواهای مشابه */
  similars: NewsContentSimilarModel[];
  /** لیست دسته‌بندی‌های محتوا */
  contentCategores: NewsContentCategoryModel[];

  /** اطلاعات اضافی */
  otherInfos: string;
  /** مقادیر پارامتر محتوا */
  contentAndParameterValues: any;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل پادکست */
  linkFilePodcastIdSrc: string;
  /** آدرس فایل ویدیو */
  linkFileMovieIdSrc: string;
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
  /** آدرس نمایش محتوا */
  urlViewContent: string;
  /** آدرس کوتاه نمایش محتوا */
  urlViewContentShort: string;
  /** کد QR آدرس نمایش محتوا به صورت Base64 */
  urlViewContentQRCodeBase64: string;
}
