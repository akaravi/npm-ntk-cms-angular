import { NumberReceverInfoModel } from './numberReceverInfoModel';

export class SmsApiSendOrderCalculateResultModel {
  toNumbers: NumberReceverInfoModel[];
  fromNumber: string;
  linkApiPathId: string;
  linkApiNumberId: string;

  receiverNumberCount: number;
  endUserCreditBefore: number;

  serviceCreditSum: number;
  endUserCreditSum: number;
}
export class MessagePlaceholderModel {
  title: string;
  charValue: string;
}
