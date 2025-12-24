import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل لاگ صندوق ورودی پیامک
 */
export class SmsLogInBoxModel extends BaseModuleEntity<string> {
  /** لینک به شناسه تنظیمات خصوصی */
  linkPrivateConfigId: string;
  /** لینک به شناسه شماره API */
  linkApiNumberId: string;
  /** تاریخ دریافت */
  receiverDate: Date;
  /** تاریخ تحلیل */
  analysisDate: Date;
  /** شماره فرستنده */
  senderNumber: string;
  /** شماره گیرنده */
  receiverNumber: string;
  /** نوع صندوق ورودی */
  inBoxType: string;
  /** پیام */
  message: string;
  /** خوانده شده است */
  isRead: boolean;
  /** پردازش شده است */
  isProcessed: boolean;
  /** اعتبار */
  credit: number;
  /** وضعیت URL رله */
  relayUrlStatus: boolean;
  /** نتیجه URL رله */
  relayUrlResult: string;
}
