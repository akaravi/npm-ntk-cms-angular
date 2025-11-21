import { SmsLogOutBoxDetailModel } from '../../entity/sms/smsLogOutBoxDetailModel';

export class SmsApiSendOrderCalculateResultModel {
  toNumbers: SmsSendMessageTaskProcessNumberModel[];
  fromNumber: string;
  linkApiPathId: string;
  linkApiNumberId: string;
  receiverNumberCount: number;
  endUserCreditSum: number;
  endUserMessagePageCount: number[];
  serviceMessagePageCount: number[];
  endUserCredit: number;
  serviceCreditSum: number;
  messageIsUnicode: boolean;
  outBoxDetails: SmsLogOutBoxDetailModel[];
}
export class SmsSendMessageTaskProcessNumberModel {
  logOutDetailId: string;
  toNumber: string;
}
