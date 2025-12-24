import { TransactionLogPublicTypeEnum } from '../../enums/donate/transactionLogPublicTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';
//@@tag-Version-2201011
/**
 * مدل هدف اهدا
 */
export class DonateTargetModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** عمومی است */
  isPublic: boolean;
  /** نوع لاگ تراکنش عمومی */
  transactionLogPublic: TransactionLogPublicTypeEnum;
  /** آدرس وب */
  toWebAddress: string;
  /** هش MD5 */
  hashMd5: string;
  /** کد کلید */
  keyCode: string;
  /** تعداد کلیک فعلی */
  currentClickCount: number;
  /** تعداد نمایش فعلی */
  currentViewCount: number;
  /** تعداد پرداخت فعلی */
  currentPaymentCount: number;
  /** مجموع پرداخت فعلی */
  currentPaymentSum: number;
  /** لینک به شناسه کاربر CMS */
  linkCmsUserId: number;
  /** لینک به شناسه دسته‌بندی هدف */
  linkTargetCategoryId?: number;
  /** دسته‌بندی هدف */
  targetCategory: DonateTargetCategoryModel;
  /** لینک به شناسه تصویر اصلی */
  linkMainImageId?: number;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** لیست دوره‌های هدف */
  targetPeriods: DonateTargetPeriodModel[];
  /** شناسه بیلبورد حمل */
  carryBillboardId: number;
  /** آدرس وب حمل */
  carryToWebAddress: string;
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
  /** کد QR Base64 */
  qRCodeBase64: string;
}
