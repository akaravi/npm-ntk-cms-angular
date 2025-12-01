import { NumberReceverInfoModel } from './numberReceverInfoModel';
;
export class SmsClientSendMessageResultModel {
  logOutId: string;
  sendId: string;
  toNumbers: NumberReceverInfoModel[];
  fromNumber: string;
  messageIsUnicode: boolean;
  linkCmsUser?: number;
  linkSiteId?: number;
  linkApiPathId: string;
  linkApiNumberId: string;
  receiverNumberCount: number;
  endUserCreditSum: number;
  endUserCreditBefore: number;
  serviceCreditSum: number;
}
