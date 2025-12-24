
import { SmsProcessFlowRecordStatusEnum } from '../../enums/sms/smsProcessFlowRecordStatusEnum';
import { SmsProcessFlowSmsStatusEnum } from '../../enums/sms/smsProcessFlowSmsStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل گردش کار مسیر API پیامک
 */
export class SmsMainApiPathProcessFlowModel extends BaseModuleEntity<string> {
  /** وضعیت رکورد گردش کار */
  processFlowStatus: SmsProcessFlowRecordStatusEnum;
  /** وضعیت پیامک */
  smsStatus: SmsProcessFlowSmsStatusEnum;
  /** لینک به شناسه تنظیمات خصوصی سایت */
  linkPrivateSiteConfigId: string;
  /** لینک به شناسه کاربر */
  linkUserId?: number;
  /** مبلغ */
  amount: number;
  /** مبلغ خالص */
  amountPure: number;
  /** مقادیر مهر به صورت JSON */
  stampJsonValues: string;
  /** درخواست بازگشت کاربر از پیامک به صورت JSON */
  requestBackUserFromSmsJsonValues: string;
  /** آخرین پیام وضعیت */
  lastStatusMessage: string;
}
