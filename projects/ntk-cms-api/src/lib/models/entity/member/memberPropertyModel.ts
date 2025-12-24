import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberHistoryModel } from './memberHistoryModel';
import { MemberPropertyDetailValueModel } from './memberPropertyDetailValueModel';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
import { MemberUserModel } from './memberUserModel';
//@@tag-Version-2201011
/**
 * ویژگی عضو
 */
export class MemberPropertyModel extends BaseModuleEntity<number> {
  /** لینک به شناسه کاربر عضو */
  linkMemberId: number;
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** لینک به شناسه کاربر CMS */
  linkCmsUserId: number;
  /** لینک به شناسه نوع ویژگی عضو */
  linkPropertyTypeId: number;

  // tslint:disable-next-line: variable-name
  virtual_memberUser: MemberUserModel;

  // tslint:disable-next-line: variable-name
  virtual_PropertyType: MemberPropertyTypeModel;

  /** آدرس */
  address: string;
  /** تصویر اصلی */
  linkMainImageId: number;
  /** تصویراضافه */
  linkExtraImageIds: string;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** تعداد لایک */
  sumLikeClick: number;
  /** تعداد امتیاز */
  sumLikeScore: number;
  /** تعداد نمایش */
  viewCount: number;

  /** لیست تاریخچه‌ها */
  histores: MemberHistoryModel[];

  /** لیست مقادیر جزئیات ویژگی */
  // tslint:disable-next-line: variable-name
  virtual_PropertyDetailValue: MemberPropertyDetailValueModel[];

  /** آدرس تصویر اصلی */
  mainImageSrc: string;
  /** آدرس تصاویر اضافی */
  linkExtraImageIdsSrc: string[];
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
}
