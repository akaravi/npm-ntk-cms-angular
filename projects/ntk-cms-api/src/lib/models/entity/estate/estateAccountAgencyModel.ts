import { RecordAdminStatusEnum, RecordStatusEnum } from '../../enums/base/recordStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212171
/**
 * حساب آژانس ملکی شامل اطلاعات هویتی، موقعیت و سطح دسترسی.
 */
export class EstateAccountAgencyModel extends BaseModuleEntity<string> {
  /** وضعیت تأیید مدیریتی. */
  mainAdminRecordStatus = RecordAdminStatusEnum.Pending;
  /** شناسه کاربر CMS مالک. */
  linkCmsUserId: number;
  /** عنوان آژانس. */
  title: string;
  /** توضیح کوتاه. */
  description: string;
  /** توضیح داخلی/مخفی. */
  descriptionHidden: string;
  /** شناسه موقعیت مکانی. */
  linkLocationId?: number;
  /** عنوان موقعیت مکانی. */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت مکانی. */
  linkLocationIdParentTitle: string;
  /** شناسه‌های محدوده کاری مرتبط. */
  linkLocationWorkAreaIds: number[];
  /** اعلان تغییرات محدوده کاری ملک. */
  notificationWorkAreaEstate: boolean;
  /** اعلان سفارش‌های مشتری. */
  notificationWorkAreaCustomerOrder: boolean;
  /** عرض جغرافیایی. */
  geolocationlatitude?: number;
  /** طول جغرافیایی. */
  geolocationlongitude?: number;

  /** آدرس دفتر. */
  address: string;
  /** تلفن ثابت. */
  phoneNumber: string;
  /** موبایل. */
  mobileNumber: string;
  /** شناسه تصویر اصلی. */
  linkMainImageId?: number;
  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;

  /** شناسه‌های تصاویر اضافی. */
  linkExtraImageIds: string;
  /** آدرس‌های تصاویر اضافی. */
  linkExtraImageIdsSrc: string[];

  /** دسترسی مشاهده رکوردهای سایت. */
  accessWatchRowSite: boolean;
  /** دسترسی مشاهده رکورد سایر آژانس‌ها. */
  accessWatchRowOtherAgency: boolean;
  /** دسترسی مشاهده رکورد سایر نمایندگان. */
  accessWatchRowOtherAgent: boolean;
  /** اجازه اشتراک رکورد برای مشاهده توسط سایر آژانس‌ها. */
  accessAllowShareRowWatchOtherAgency: boolean;
  /** اجازه اشتراک رکورد برای مشاهده توسط سایر نمایندگان. */
  accessAllowShareRowWatchOtherAgent: boolean;
}
