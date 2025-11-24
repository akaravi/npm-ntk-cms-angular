export class SmsClientSendMessageDtoModel {
  apiKey: string;
  path: number;
  fromNumber: string;
  toNumbers: string;
  message: string;
  isFlash: boolean;
}
