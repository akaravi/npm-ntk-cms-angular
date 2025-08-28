import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';
//@@tag-Version-2201011
export class SmsLogOutBoxModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkApiNumberId: string;
  sendDate: Date;
  message: string;
  memo: string;
  flash: number;
  creditOverPlus: number;
  creditUserBefor: number;
  engineTryToSendCount: number;

  engineApiAllowToChange: boolean;
  outBoxType: number;
  outBoxTypeTitle: string;
  outBoxDetails?: SmsLogOutBoxDetailModel[];
  outBoxDetailBulks?: SmsLogOutBoxDetailBulkModel[];

  /// <summary>
  /// تعداد ردیف
  /// </summary>
  countRow: number;
  /// <summary>
  /// تعداد ارسال شده
  /// </summary>
  countSent: number;
  /// <summary>
  /// تعداد دلیور دریافتی
  /// </summary>
  countDelivery: number;
  /// <summary>
  /// تعداد برگشت اعتبار
  /// </summary>
  countCreditBacked: number;
  countServiceCreditBacked: number;
  /// <summary>
  /// مجموع اعتبار
  /// </summary>
  sumCredit: number;
  /// <summary>
  /// مجموع اعتبار برگشت شده
  /// </summary>
  sumCreditBacked: number;
}
