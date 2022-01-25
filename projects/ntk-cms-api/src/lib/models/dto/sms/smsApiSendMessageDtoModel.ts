
export class SmsApiSendMessageDtoModel {
  LinkApiPathId: string;
  LinkFromNumber: string;
  ToNumber: string;
  Message: string;
  SendByQeue: boolean;
  IsFlash: boolean;
}
