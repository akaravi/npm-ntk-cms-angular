
import { RecordAdminStatusEnum, RecordStatusEnum } from '../../enums/base/recordStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
//@@tag-Version-2311011
/**
 * شرکت ملکی مرتبط با املاک، شامل اطلاعات تماس، رسانه و موقعیت.
 */
export class EstatePropertyCompanyModel extends BaseModuleEntity<string> {
  /** عنوان شرکت. */
  title: string;
  /** شناسه کاربر CMS مالک. */
  linkCmsUserId?: number;
  /** وضعیت تأیید مدیریتی. */
  mainAdminRecordStatus = RecordAdminStatusEnum.Pending;
  /** توضیح. */
  description: string;
  /** توضیح مخفی. */
  descriptionHidden: string;
  /** آدرس. */
  address: string;
  /** تلفن. */
  phoneNumber: string;
  /** موبایل. */
  mobileNumber: string;
  /** موقعیت‌های مرتبط. */
  linkLocationIds: number[];
  /** محتوای بدنه. */
  body: string;
  /** عرض جغرافیایی. */
  geolocationlatitude?: number;
  /** طول جغرافیایی. */
  geolocationlongitude?: number;
  /** شناسه موقعیت اصلی. */
  linkLocationId?: number;
  /** کلمات کلیدی. */
  keyword: string;
  /** شناسه فایل‌ها. */
  linkFileIds: string;
  /** شناسه تصاویر اضافی. */
  linkExtraImageIds?: string;
  /** شناسه پادکست. */
  linkFilePodcastId?: number;
  /** شناسه ویدیو. */
  linkFileMovieId?: number;
  /** شناسه تصویر اصلی. */
  linkMainImageId?: number;
  /** تعداد کلیک. */
  scoreClick: number;
  /** مجموع امتیازات. */
  scoreSumPercent: number;
  /** تعداد بازدید. */
  viewCount: number;
  /** مخفی‌سازی در لیست. */
  viewConfigHiddenInList: boolean;
  /** نشانه علاقه‌مندی. */
  favorited: boolean;
  /** منبع داده. */
  source: string;

  /** شناسه کشور. */
  linkLocationCountryId: number;

  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;
  /** تصاویر 360. */
  file360Views: File360ViewModel[];
  /** تور 360. */
  file360Tour: File360TourModel;
  /** آدرس پادکست. */
  linkFilePodcastIdSrc: string;
  /** آدرس ویدیو. */
  linkFileMovieIdSrc: string;
  /** آدرس فایل‌ها. */
  linkFileIdsSrc: string[];
  /** آدرس تصاویر اضافی. */
  linkExtraImageIdsSrc: string[];

  /** فایل‌های آپلود مستقیم. */
  uploadFileGUID: string[];
  /** لینک نمایش محتوا. */
  urlViewContent: string;
  /** لینک کوتاه محتوا. */
  urlViewContentShort: string;
  /** QR کد نمایش محتوا Base64. */
  urlViewContentQRCodeBase64: string;
  /** عنوان کشور. */
  linkLocationCountryIdTitle: string;
  /** عنوان موقعیت. */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت. */
  linkLocationIdParentTitle: string;

  // * About */
  /** تلفن تماس. */
  aboutTel: string;
  /** موبایل تماس. */
  aboutMobile: string;
  // * About */
}
