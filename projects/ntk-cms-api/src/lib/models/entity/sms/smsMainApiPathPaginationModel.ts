import { SmsMessageTypeEnum } from '../../enums/sms/smsMessageTypeEnum';
import { SmsOutBoxTypeEnum } from '../../enums/sms/smsOutBoxTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
/**
 * مدل سرویس قیمت مسیر API پیامک
 */
export class SmsMainApiPathPaginationModel extends BaseModuleEntity<string> {
  /** عنوان */
  title: string;
  /** لینک به شناسه مسیر API */
  linkApiPathId: string;

  /** الگوی تشخیص شماره به صورت JSON */
  regulatorNumberJson: string;
  /** لیست الگوهای تشخیص شماره */
  regulatorNumberList: string[];
  /** قیمت خرید از سرویس دهنده به ازای هر صفحه */
  servicePricePerPage: number;
  /** صفحه‌بندی خرید به صورت JSON */
  serviceMessageLengthPaginationJson: string;
  /** لیست صفحه‌بندی خرید */
  serviceMessageLengthPaginationList: number[];
  /** هزینه بر اساس تحویل برای سرویس */
  serviceDeliveryCostBase: boolean;
  /** قیمت فروش به کاربر نهایی به ازای هر صفحه */
  endUserPricePerPage: number;
  /** صفحه‌بندی فروش به کاربر نهایی به صورت JSON */
  endUserMessageLengthPaginationJson: string;
  /** لیست صفحه‌بندی فروش به کاربر نهایی */
  endUserMessageLengthPaginationList: number[];
  /** هزینه بر اساس تحویل برای کاربر نهایی */
  endUserDeliveryCostBase: boolean;
  /** نوع پیام */
  messageType: SmsMessageTypeEnum;
  /** نوع صندوق خروجی به صورت JSON */
  outBoxTypeJson: string;
  /** لیست انواع صندوق خروجی */
  outBoxTypeList: SmsOutBoxTypeEnum[];
  /** قیمت صوتی کاربر */
  userVoicePrice: number;
  /** مسیر API (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  /** مسیر API */
  apiPath: SmsMainApiPathModel;
}
