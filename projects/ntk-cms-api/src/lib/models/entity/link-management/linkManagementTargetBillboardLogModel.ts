import { BaseModuleEntity } from '../base/baseModuleEntity';
import { LinkManagementBillboardModel } from './linkManagementBillboardModel';
import { LinkManagementTargetModel } from './linkManagementTargetModel';
//@@tag-Version-2201011
/**
 * لاگ بیلبورد هدف مدیریت لینک
 */
export class LinkManagementTargetBillboardLogModel extends BaseModuleEntity<string> {
  /** قیمت هر بار کلیک */
  clickPrice: number;
  /** قیمت هر بار نمایش */
  viewPrice: number;
  /** شناسه دستگاه */
  deviceId: string;
  /** آدرس IP */
  ipAddress: string;
  /** نام مرورگر */
  browserName: string;
  /** کاربر چند لحظه در آن صفحه منتظر شده است جهت رتبه بندی آتی آدرس لینک */
  visitTimeInSecond: number;
  /** لینک به شناسه بیلبورد مدیریت لینک */
  linkManagementBillboardId?: number;
  // tslint:disable-next-line: variable-name
  virtual_Billboard: LinkManagementBillboardModel;
  /** بیلبورد */
  billboard: LinkManagementBillboardModel;
  /** لینک به شناسه هدف مدیریت لینک */
  linkManagementTargetId: number;
  // tslint:disable-next-line: variable-name
  virtual_Target: LinkManagementTargetModel;
  /** هدف */
  target: LinkManagementTargetModel;
}
