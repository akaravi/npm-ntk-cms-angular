import { ManagementContentSettingTypeEnum } from '../../enums/link-management/managementContentSettingTypeEnum';
import { SharingPriceTypeEnum } from '../../enums/link-management/sharingPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementTargetCategoryModel } from './linkManagementTargetCategoryModel';
//@@tag-Version-2201011
/**
 * لینک ثبت شده
 */
export class LinkManagementTargetModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** لینک برای عموم قابل نمایش باشد */
  isPublic?: boolean;
  /** آدرس صفحه خریدار جهت تبادل لینک */
  toWebAddress: string;
  /** تعداد کلیک تا الان */
  currentClickCount: number;
  /** تعداد نمایش تا الان */
  currentViewCount: number;
  /** لینک به شناسه عضو مدیریت لینک */
  linkManagementMemberId?: number;
  /** لینک به شناسه الکوی بیلبرد نمایش */
  linkBillboardPatternId?: number;
  /** لیست دسته‌بندی‌های هدف */
  targetCategories: LinkManagementTargetCategoryModel[];
  /** آدرس لینکی که قرار است بازدید شود */
  webAddress: string;
  /** اچ تی ام ال نمایش در حالت کوچک */
  smallPreview: string;
  /** از تاریخ */
  shareBeginDate?: Date;
  /** تا تاریخ */
  shareExpireDate?: Date;
  /** نوع قیمت گذاری */
  sharingLinkType: SharingPriceTypeEnum;
  /** مبلغی که هر بار بر اساس کلیک باید کسر شود یا اضافه شود */
  clickPrice: number;
  /** مبلغی که هر بار بر اساس نمایش باید کسر شود یا اضافه شود */
  viewPrice: number;
  /** بودجه کلی برای این تبلیغ را مشخص می کند */
  maxPriceOfShareTotal: number;
  /** بودجه روزانه را مشخص می کند */
  maxPriceOfSharePerDay: number;
  /** درصد خرید و فروش بر اساس تبادل لینک را مشخص می کند */
  formulaPercent: number;
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** نوع تنظیمات محتوا */
  contentSettingType: ManagementContentSettingTypeEnum;
  /** شناسه بیلبورد حمل */
  carryBillboardId: number;
  /** آدرس وب حمل */
  carryToWebAddress: string;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
  /** کد QR به صورت Base64 */
  qRCodeBase64: string;
  /** آدرس نمایش محتوا */
  urlViewContent: string;
  /** آدرس کوتاه نمایش محتوا */
  urlViewContentShort: string;
  /** کد QR آدرس نمایش محتوا به صورت Base64 */
  urlViewContentQRCodeBase64: string;
  /** نام ماژول */
  moduleName: string;
  /** نام موجودیت ماژول */
  moduleEntityName: string;
  /** شناسه موجودیت ماژول */
  moduleEntityId: string;
}

