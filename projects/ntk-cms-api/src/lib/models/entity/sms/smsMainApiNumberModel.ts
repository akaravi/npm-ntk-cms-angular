import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';
//@@tag-Version-2201011
/**
 * مدل شماره API پیامک
 */
export class SmsMainApiNumberModel extends BaseModuleEntity<string> {
  /** شماره کاراکتری */
  numberChar: string;
  /** تاریخ شروع استفاده */
  accessUseStartDate: Date;
  /** تاریخ انقضا */
  expireDate: Date;
  /** آخرین تاریخ استفاده */
  lastUseOfDate: Date;
  /** وضعیت فروش */
  saleStatus: boolean;
  /** عمومی است */
  isPublic: boolean;
  /** اولویت */
  priority?: number;
  /** وضعیت رله تحویل */
  deliveryRelayStatus: boolean;
  /** آدرس URL رله تحویل */
  deliveryRelayUrl: string;
  /** وضعیت رله پیامک */
  smsRelayStatus: boolean;
  /** آدرس URL رله پیامک */
  smsRelayUrl: string;
  /** یادداشت عملیات */
  actionMemo: string;
  /** متن اضافه شده به ابتدای پیام در API */
  apiSendMessageAddTextFirst: string;
  /** متن اضافه شده به انتهای پیام در API */
  apiSendMessageAddTextEnd: string;
  /** متن اضافه شده به ابتدای پیام در ارسال */
  sendMessageAddTextFirst: string;
  /** متن اضافه شده به انتهای پیام در ارسال */
  sendMessageAddTextEnd: string;
  /** لیست مسیرها و شماره‌های API */
  apiPathAndApiNumbers: SmsMainApiPathAndApiNumberModel[];
}
