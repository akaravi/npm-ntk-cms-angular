
export class SmsApiSendMessageDtoModel {
  checkProcesses:boolean=false;
  linkApiPathId: string;
  linkFromNumber: string;
  toNumbers: string;
  toContactCategories: string[];
  toContactContents: string[];
  message: string;
  sendByQueue: boolean;
  isFlash: boolean;
  scheduleSendStart: Date;
  scheduleSendExpire: Date;
  scheduleCron: string;
}
