import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';
//@@tag-Version-2201011
/**
 * مدل لاگ صندوق خروجی پیامک
 */
export class SmsLogOutBoxModel extends BaseModuleEntity<string> {
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;
  /** لینک به شناسه شماره API */
  linkApiNumberId: string;
  /** تاریخ ارسال */
  sendDate: Date;
  /** پیام */
  message: string;
  /** یادداشت */
  memo: string;
  /** فلش */
  flash: number;
  /** اعتبار اضافی */
  creditOverPlus: number;
  /** اعتبار کاربر قبل از ارسال */
  creditUserBefor: number;
  /** تعداد تلاش موتور برای ارسال */
  engineTryToSendCount: number;
  /** موتور API اجازه تغییر دارد */
  engineApiAllowToChange: boolean;
  /** نوع صندوق خروجی */
  outBoxType: number;
  /** عنوان نوع صندوق خروجی */
  outBoxTypeTitle: string;
  /** لیست جزئیات صندوق خروجی */
  outBoxDetails?: SmsLogOutBoxDetailModel[];
  /** لیست جزئیات انبوه صندوق خروجی */
  outBoxDetailBulks?: SmsLogOutBoxDetailBulkModel[];
  /** تعداد ردیف */
  countRow: number;
  /** تعداد ارسال شده */
  countSent: number;
  /** تعداد تحویل دریافتی */
  countDelivery: number;
  /** تعداد برگشت اعتبار */
  countCreditBacked: number;
  /** تعداد برگشت اعتبار سرویس */
  countServiceCreditBacked: number;
  /** مجموع اعتبار */
  sumCredit: number;
  /** مجموع اعتبار برگشت شده */
  sumCreditBacked: number;
}
