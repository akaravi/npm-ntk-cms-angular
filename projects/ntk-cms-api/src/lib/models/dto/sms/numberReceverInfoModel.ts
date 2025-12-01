export class NumberReceverInfoModel {
  message: string;
  messageTextForbid: boolean;
  messageTextFiltering: boolean;
  messageTextFilteringChar: string;
  messageNumberForbid: boolean;
  messageNumberFiltering: boolean;
  messageNumberFilteringChar: string;
  messageIsUnicode: boolean;
  messageIsDefaultInput: boolean = true;
  serviceCredit: number = 0;
  serviceCreditDeliveryCostBase: boolean = false;
  credit: number = 0;
  creditDeliveryCostBase: boolean = false;
  number: string;
  allowToSend: boolean = true;
  errorMessage: string;
  pageCount: number;
  senderNumber: string;
  receiverNumber: string;
  receiverNumberHidden: boolean = false;
  linkApiNumberId: string;
  linkApiPathId: string;
  isSent: boolean;
}
