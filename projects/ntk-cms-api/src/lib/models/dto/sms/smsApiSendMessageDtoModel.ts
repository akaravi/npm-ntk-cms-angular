
export class SmsApiSendMessageDtoModel {
  linkApiPathId: string;
  linkFromNumber: string;
  toNumbers: string;
  toContactCategories: string[];
  toContactContents: string[];
  message: string;
  sendByQeue: boolean;
  isFlash: boolean;
  scheduleSend: Date;
  scheduleCron: string;
}
