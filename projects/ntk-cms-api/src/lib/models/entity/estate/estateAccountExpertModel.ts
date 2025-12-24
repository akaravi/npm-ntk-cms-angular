import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212171
/**
 * حساب کارشناس ملک شامل دسترسی، موقعیت و اطلاعات تماس.
 */
export class EstateAccountExpertModel extends BaseModuleEntity<string> {
  /** شناسه کاربر CMS مرتبط. */
  linkCmsUserId: number;
  /** عنوان/نام کارشناس. */
  title: string;
  /** توضیح کوتاه. */
  description: string;
  /** توضیح مخفی/داخلی. */
  descriptionHidden: string;
  /** شناسه Join یا کد یکتا. */
  joinId: string;
  /** شناسه موقعیت مکانی. */
  linkLocationId?: number;
  /** عنوان موقعیت مکانی. */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت. */
  linkLocationIdParentTitle: string;
  /** شناسه‌های محدوده کاری. */
  linkLocationWorkAreaIds: number[];
  /** اعلان تغییرات محدوده کاری ملک. */
  notificationWorkAreaEstate: boolean;
  /** اعلان سفارش‌های مشتری. */
  notificationWorkAreaCustomerOrder: boolean;

  /** عرض جغرافیایی. */
  geolocationlatitude?: number;
  /** طول جغرافیایی. */
  geolocationlongitude?: number;
  /** تاریخ تولید/ساخت (در صورت کاربرد). */
  dateManufacture?: Date;
  /** محل تولید/ثبت. */
  placeProduction: string;
  /** سریال RFID. */
  serialRfId: string;
  /** شماره سریال. */
  serialNumber: string;
  /** تلفن. */
  phoneNumber: string;
  /** موبایل. */
  mobileNumber: string;
  /** آدرس. */
  address: string;
  /** شناسه تصویر اصلی. */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;

  /** دسترسی مشاهده رکوردهای سایت. */
  accessWatchRowSite: boolean;
  /** دسترسی مشاهده رکورد سایر آژانس‌ها. */
  accessWatchRowOtherAgency: boolean;
  /** دسترسی مشاهده رکورد سایر نمایندگان. */
  accessWatchRowOtherAgent: boolean;
  /** اجازه اشتراک رکورد برای مشاهده توسط آژانس‌های دیگر. */
  accessAllowShareRowWatchOtherAgency: boolean;
  /** اجازه اشتراک رکورد برای مشاهده توسط نمایندگان دیگر. */
  accessAllowShareRowWatchOtherAgent: boolean;
}
