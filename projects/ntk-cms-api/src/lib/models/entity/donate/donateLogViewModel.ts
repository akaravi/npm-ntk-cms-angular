import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ مشاهده اهدا
 */
export class DonateLogViewModel extends BaseModuleEntity<string> {
  /** شناسه هدف اهدا */
  donateTargetId: number;
  /** شناسه دستگاه */
  deviceId: string;
  /** آدرس IP */
  ipAddress: string;
  /** نام مرورگر */
  browserName: string;
  /** تاریخ بازدید */
  visitDate: Date;
  /** زمان بازدید به ثانیه */
  visitTimeInSecond: number;
  /** شناسه بیلبورد اهدا */
  donateBillboardId?: number;
}
