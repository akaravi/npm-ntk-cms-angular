
export class SmsApiSendResultModel {
  linkCmsUser?: number;
  linkSiteId?: number;
  logOutId: string;
  toNumber: string;
  fromNumber: string;
  sendId: string;
  linkApiPathId: string;
  linkApiNumberId: string;
  receiverNumberCount:number;
  endUserCreditSum:number;
  endUserMessagePageCount:number[];
  serviceMessagePageCount:number[];
  endUserCredit:number;
  serviceCreditSum:number; 
}
