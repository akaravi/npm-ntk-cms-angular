import { ManagementContentSettingTypeEnum } from '../../enums/link-management/managementContentSettingTypeEnum';
import { SharingPriceTypeEnum } from '../../enums/link-management/sharingPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
/**
 * الکوی نمایش در سایت نمایش دهنده تبلغ می باشد
 * ابعاد و قیمت پایه از این این قسمت می باشد
 */
export class LinkManagementBillboardPatternModel extends BaseModuleEntity<number> {
  /** نوع قیمت گذاری */
  sharingLinkType: SharingPriceTypeEnum;
  /** نوع تنظیمات محتوا */
  settingType: ManagementContentSettingTypeEnum;
  /** عنوان الگو */
  title: string;
  /** قیمت هر بار کلیک */
  clickPrice: number;
  /** قیمت هر بار نمایش */
  viewPrice: number;
  /** عرض الگو */
  width: number;
  /** ارتفاع الگو */
  height: number;
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** عکس بگ گراد در اجرا */
  linkBackgroundId?: number;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** الکوی کد نمایش در سایت */
  patternScript: string;
  /** مثال الکوی کد نمایش */
  patternScriptExample: string;
  /** لیست اهداف */
  targets: LinkManagementTargetModel[];
  /** لیست بیلبوردها */
  billboards: LinkManagementBillboardModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس تصویر پس‌زمینه */
  linkBackgroundIdSrc: string;
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
}
