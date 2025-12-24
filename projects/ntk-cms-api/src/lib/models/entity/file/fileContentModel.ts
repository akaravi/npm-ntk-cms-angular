import { BaseModuleEntity } from '../base/baseModuleEntity';
import { FileCategoryModel } from './fileCategoryModel';
//@@tag-Version-2201011
/**
 * مدل محتوای فایل
 */
export class FileContentModel extends BaseModuleEntity<number> {
  /** لینک به شناسه دسته‌بندی */
  linkCategoryId: number;
  /** نام فایل */
  fileName: string;
  /** توضیحات */
  description: string;
  /** بدنه */
  body: string;
  /** از تاریخ */
  fromDate: Date;
  /** عرض جغرافیایی */
  geolocationlatitude: number;
  /** طول جغرافیایی */
  geolocationlongitude: number;
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
  /** اندازه فایل */
  fileSize: number;
  /** تاریخ انقضا */
  expireDate: Date;
  /** ایجاد شده توسط ماژول Core */
  moduleCoreCreatedBy: string;
  /** به‌روزرسانی شده توسط ماژول Core */
  moduleCoreUpdatedBy: string;
  /** منبع */
  source: string;
  // tslint:disable-next-line: variable-name
  virtual_Category: FileCategoryModel;
  /** دسته‌بندی */
  category: FileCategoryModel;
  /** سایر اطلاعات */
  otherInfos: string;
  /** مقادیر پارامتر و محتوا */
  contentAndParameterValues: any;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس لینک دانلود */
  downloadLinksrc: string;
  /** آدرس لینک دانلود بر اساس دامنه */
  downloadLinksrcByDomain: string;
  /** آدرس تصویر بندانگشتی دانلود */
  downloadThumbnailSrc: string;
  /** پسوند فایل */
  extension: string;
  /** فایل وجود دارد */
  fileExist: boolean;
  /** تاریخ بررسی وجود فایل */
  fileExistChecked: Date;
  /** تاریخ آخرین استفاده از فایل */
  fileLastUseed: Date;
  /** آدرس فایل */
  fileSrc: string;
  /** ترتیب رندر تصویر */
  renderOrderImagePlace: number;
  /** GUID فایل آپلود شده */
  uploadFileGUID: string;
}
