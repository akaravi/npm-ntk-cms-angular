import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ مسیر API پیامک
 */
export class SmsLogApiPathModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شناسه صندوق خروجی */
  linkOutBoxId: string;
  /** لینک به شناسه جزئیات صندوق خروجی */
  linkOutBoxDetailId: string;
  /** وضعیت خارج از سرویس فعال است */
  statusOutOfServiceActive: boolean;
  /** تاریخ انقضای خارج از سرویس */
  statusOutOfServiceExpire?: Date;
  /** وضعیت پایدار نبودن سرویس فعال است */
  statusNotStableActive: boolean;
  /** تاریخ انقضای پایدار نبودن سرویس */
  statusNotStableExpire?: Date;
  /** تعداد ناپایداری */
  statusNotStableCount: number;
  /** اطلاعات وضعیت */
  statusInfo: string;
}
