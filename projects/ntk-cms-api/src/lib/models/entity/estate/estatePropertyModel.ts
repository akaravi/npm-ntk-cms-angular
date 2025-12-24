import { RecordAdminStatusEnum, RecordStatusEnum } from '../../enums/base/recordStatusEnum';
import { DateTypeEnum } from '../../enums/core/dateTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { File360TourModel } from '../core-main/file360TourModel';
import { File360ViewModel } from '../core-main/file360ViewModel';
import { EstateContractModel } from './estateContractModel';
import { EstatePropertyDetailGroupModel } from './estatePropertyDetailGroupModel';
import { EstatePropertyDetailValueModel } from './estatePropertyDetailValueModel';
import { EstatePropertyTypeLanduseModel } from './estatePropertyTypeLanduseModel';
import { EstatePropertyTypeUsageModel } from './estatePropertyTypeUsageModel';
//@@tag-Version-2201011
/**
 * مدل اصلی ملک شامل ویژگی‌های هویتی، مکانی، رسانه و دسترسی.
 */
export class EstatePropertyModel extends BaseModuleEntity<string> {
  /** عنوان ملک. */
  title: string;
  /** امتیاز موقعیت. */
  scoreEstateLocation: number;
  /** امتیاز ساخت. */
  scoreEstateBuild: number;
  /** امتیاز قیمت. */
  scoreEstatePrice: number;
  /** کد پرونده. */
  caseCode: string;
  /** وضعیت تأیید مدیریتی. */
  mainAdminRecordStatus = RecordAdminStatusEnum.Pending;
  /** سال ساخت. */
  createdYaer?: number;
  /** نوع تاریخ ساخت. */
  createdYaerType: DateTypeEnum;
  /** تعداد پارتیشن. */
  partition: number;
  /** متراژ. */
  area: number;
  /** شناسه کاربر CMS مرتبط. */
  linkCmsUserId?: number;
  /** شناسه کارشناس ملک. */
  linkEstateExpertId: string;
  /** شناسه آژانس. */
  linkEstateAgencyId: string;
  /** وضعیت فروش رفته. */
  isSoldIt: boolean;
  /** تاریخ بازبینی پس از فروش. */
  reviewDataAfterSoldIt?: Date;
  /** شناسه موقعیت. */
  linkLocationId: number;
  /** شناسه کشور. */
  linkLocationCountryId: number;
  /** توضیح عمومی. */
  description: string;
  /** توضیح مخفی. */
  descriptionHidden: string;
  /** مخفی‌سازی در لیست. */
  viewConfigHiddenInList: boolean;
  /** کاربری زمین. */
  linkPropertyTypeLanduseId: string;
  /** نوع استفاده. */
  linkPropertyTypeUsageId: string;
  /** پروژه مرتبط. */
  linkPropertyProjectId: string;
  /** شرکت مرتبط. */
  linkPropertyCompanyId: string;
  /** ناوبری کاربری زمین. */
  propertyTypeLanduse: EstatePropertyTypeLanduseModel;
  /** ناوبری نوع استفاده. */
  propertyTypeUsage: EstatePropertyTypeUsageModel;
  /** پیکربندی نمایش محتوا. */
  viewContentHidden: boolean;
  /** مخفی برای ادمین سایت. */
  siteAdminViewContentHidden: boolean;
  /** کلید اشتراک. */
  sharingKey: string;
  /** شناسه اشتراک. */
  sharingId: number;
  /** عرض جغرافیایی. */
  geolocationlatitude?: number;
  /** طول جغرافیایی. */
  geolocationlongitude?: number;

  /** آدرس. */
  address: string;
  /** آدرس مخفی. */
  addressHidden: string;
  /** شناسه تصویر اصلی. */
  linkMainImageId?: number;

  /** شناسه تصاویر اضافه. */
  linkExtraImageIds: string;
  /** شناسه فایل‌ها. */
  linkFileIds: string;
  /** تصاویر 360. */
  file360Views: File360ViewModel[];
  /** تور 360. */
  file360Tour: File360TourModel;
  /** تعداد کلیک/آرا. */
  scoreClick: number;
  /** مجموع امتیازها از 10. */
  scoreSumPercent: number;
  /** وضعیت فعال بودن آگهی. */
  adsActive: boolean;
  /** تاریخ انقضای آگهی. */
  adsExpireDate: Date;
  /** تعداد بازدید. */
  viewCount: number;
  /** تلفن مشاور. */
  aboutAgentTel: string;
  /** موبایل مشاور. */
  aboutAgentMobile: string;
  /** تلفن مشتری. */
  aboutCustomerTel: string;
  /** موبایل مشتری. */
  aboutCustomerMobile: string;
  /** قراردادها. */
  contracts: EstateContractModel[];

  /** مقادیر فیلدهای جزئیات. */
  propertyDetailValues: EstatePropertyDetailValueModel[];
  /** گروه‌های جزئیات. */
  propertyDetailGroups: EstatePropertyDetailGroupModel[];

  /** آدرس تصویر اصلی. */
  linkMainImageIdSrc: string;
  /** آدرس تصاویر اضافه. */
  linkExtraImageIdsSrc: string[];
  /** آدرس فایل‌ها. */
  linkFileIdsSrc: string[];
  /** فایل‌های آپلود مستقیم. */
  uploadFileGUID: string[];
  /** لینک نمایش محتوا. */
  urlViewContent: string;
  /** لینک کوتاه نمایش محتوا. */
  urlViewContentShort: string;
  /** QR کد نمایش محتوا Base64. */
  urlViewContentQRCodeBase64: string;
  /** عنوان کشور. */
  linkLocationCountryIdTitle: string;
  /** عنوان موقعیت. */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت. */
  linkLocationIdParentTitle: string;
  /** نشان علاقه‌مندی. */
  favorited: boolean;
  /** ایجاد کاربر CMS جدید. */
  actionCreateNewCmsUser: boolean = false;
  /** نام کاربر جدید. */
  actionCreateNewCmsUserFirstName: string;
  /** نام خانوادگی کاربر جدید. */
  actionCreateNewCmsUserLastName: string;
  /** موبایل کاربر جدید. */
  actionCreateNewCmsUserMobile: string;
  /** تعداد تاریخچه کلی. */
  historyTotalCount: number;
  /** تاریخچه کاربران ملک. */
  historyEstateUserCount: number;
  /** تاریخچه آژانس. */
  historyEstateAgencyCount: number;
  /** تاریخچه سفارش مشتری. */
  historyCustomerOrderCount: number;
}
