
export class SmsApiSendMessageDtoModel {
  linkApiPathId: string;
  linkFromNumber: string;
  toNumber: string;
  message: string;
  sendByQeue: boolean;
  isFlash: boolean;
}
