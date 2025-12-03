
export class SmsApiSendMessageDtoModel {
  linkApiPathId: string;
  linkFromNumber: string;
  toNumbers: string;
  toContactCategories: string[];
  toContactContents: string[];
  message: string;
  scheduleSendStart: Date;
  scheduleSendExpire: Date;
  scheduleCron: string;
  optionTypes: string;
  optionSendByQueue?: boolean;
  optionCheckProcesses: boolean = false;
  optionDuplicateRemovalToNumbers: boolean = true;
  clientDateTime?: Date;
}
