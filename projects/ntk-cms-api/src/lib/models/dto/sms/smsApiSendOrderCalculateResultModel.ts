import { SmsLogOutBoxDetailModel } from '../../entity/sms/smsLogOutBoxDetailModel';

export class SmsApiSendOrderCalculateResultModel {
  toNumbers: SmsSendMessageNumberInfoModel[];
  fromNumber: string;
  linkApiPathId: string;
  linkApiNumberId: string;
  messageIsUnicode: boolean;
  receiverNumberCount: number;
  endUserCreditBefore: number;

  serviceCreditSum: number;
  endUserCreditSum: number;

  outBoxDetails: SmsLogOutBoxDetailModel[];
}
export class SmsSendMessageNumberInfoModel {
  toNumber: string;
  credit: number;
  serviceCredit: number;
  pageCount: number;
  receiverNumberHidden: boolean;
}
