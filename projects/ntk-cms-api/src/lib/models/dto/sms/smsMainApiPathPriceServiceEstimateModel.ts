import { SmsMessageTypeEnum } from '../../enums/sms/smsMessageTypeEnum';
import { SmsOutBoxTypeEnum } from '../../enums/sms/smsOutBoxTypeEnum';

export class SmsMainApiPathPriceServiceEstimateModel {
  linkApiPathId: string;
  messageType: SmsMessageTypeEnum;
  outBoxTypeList: SmsOutBoxTypeEnum[];
  endUserPricePerPageMin: number;
  endUserPricePerPageMax: number;
  endUserMessageLengthPaginationList: number[] = [];
}
