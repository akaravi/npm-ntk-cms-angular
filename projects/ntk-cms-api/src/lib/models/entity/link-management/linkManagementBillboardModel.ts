import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardCategoryModel } from './linkManagementBillboardCategoryModel';
import { LinkManagementBillboardPatternModel } from './linkManagementBillboardPatternModel';

import { LinkManagementMemberModel } from './linkManagementMemberModel';
//@@tag-Version-2201011
/**
 * مشخصات تابلو یا کادر نمایش در سایت ارسال کننده کلیک به سمت ما
 */
export class LinkManagementBillboardModel extends BaseModuleEntity<number> {
  /** عنوان بیلیورد */
  title: string;
  /** رنگ زمینه */
  bgColor: string;
  /** تعداد کلیک تا الان */
  currentClickCount: number;
  /** تعداد نمایش تا الان */
  currentViewCount: number;
  lastClickDate?: Date;
  lastViewDate?: Date;
  /** تاریخ شروع */
  fromDate?: Date;
  /** تصویر اصلی */
  linkMainImageId?: number;
  /** شناسه فایل‌ها */
  linkFileIds: string;
  /** لینک به شناسه عضو مدیریت لینک */
  linkManagementMemberId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Member: LinkManagementMemberModel;
  /** عضو */
  member: LinkManagementMemberModel;
  /** لینک به شناسه الگوی بیلبورد */
  linkBillboardPatternId: number;
  // tslint:disable-next-line: variable-name
  virtual_BillboardPattern: LinkManagementBillboardPatternModel;
  /** الگوی بیلبورد */
  billboardPattern: LinkManagementBillboardPatternModel;
  /** لیست دسته‌بندی‌های بیلبورد */
  billboardCategories: LinkManagementBillboardCategoryModel[];
  /** آدرس تصویر اصلی */
  linkMainImageIdSrc: string;
  /** آدرس فایل‌ها */
  linkFileIdsSrc: string[];
  /** اسکریپت بیلبورد */
  billboardScript: string;

}
