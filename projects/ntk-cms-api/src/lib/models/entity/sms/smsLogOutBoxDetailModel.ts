import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogApiPathModel } from './smsLogApiPathModel';
import { SmsLogOutBoxModel } from './smsLogOutBoxModel';
//@@tag-Version-2201011
/**
 * مدل جزئیات لاگ صندوق خروجی پیامک
 */
export class SmsLogOutBoxDetailModel extends BaseModuleEntity<string> {
  /** وضعیت جزئیات رکورد */
  recordDetailStatus: number;
  /** لینک به شناسه صندوق خروجی */
  linkOutBoxId: string;
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شناسه شماره API */
  linkApiNumberId: string;
  /** شماره گیرنده */
  receiverNumber: string;
  /** پیام */
  message: string;
  /** تعداد صفحه */
  pageCount: number;
  /** اعتبار */
  credit: number;
  /** اعتبار بر اساس تحویل */
  creditDeliveryCostBase: boolean;
  /** اعتبار سرویس */
  serviceCredit: number;
  /** اعتبار سرویس بر اساس تحویل */
  serviceCreditDeliveryCostBase: boolean;
  /** اعتبار برگشت داده شده */
  giveBackCredit: number;
  /** شماره فرستنده */
  senderNumber: string;
  /** ارسال شده است */
  isSent: boolean;
  /** اطلاعات API در زمان ارسال */
  getApiOnSendInfo: string;
  /** شناسه API در زمان ارسال */
  getApiOnSendIdentity: string;
  /** وضعیت تحویل API */
  getApiDeliveryStatus?: number;
  /** عنوان وضعیت تحویل API */
  getApiDeliveryStatusTitle: string;
  /** عنوان وضعیت جزئیات رکورد */
  recordDetailStatusTitle: string;
  /** اطلاعات API در زمان تحویل */
  getApiOnDeliveryInfo: string;
  /** حذف شده توسط کاربر */
  userDelete?: boolean;
  /** حذف شده توسط ادمین */
  adminuserDelete?: boolean;
  /** شماره گیرنده مخفی است */
  receiverNumberHidden: boolean;
  /** صندوق خروجی (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_OutBox: SmsLogOutBoxModel;
  /** صندوق خروجی */
  outBox: SmsLogOutBoxModel;
  /** قفل‌های جزئیات صندوق خروجی */
  outBoxDetailLocks: SmsLogApiPathModel;
  /** لینک به شناسه SLA */
  slaLinkId: string;
  /** تعداد فرصت‌های باقی‌مانده SLA */
  slaChanceCount: number;
}
