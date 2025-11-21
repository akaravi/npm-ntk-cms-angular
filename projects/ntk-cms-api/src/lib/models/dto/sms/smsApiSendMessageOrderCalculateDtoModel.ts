export class SmsApiSendMessageOrderCalculateDtoModel {
  linkApiPathId: string;
  linkFromNumber: string;
  toNumbers: string;
  toContactCategories: string[];
  toContactContents: string[];
  message: string;
  isFlash: boolean;
}
