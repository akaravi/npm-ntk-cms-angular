import { BaseModuleEntity } from '../base/baseModuleEntity';
export class SmsMainCustomerCreditModel extends BaseModuleEntity<string> {
  number: string;
  description: string;
  debtor: number;
  creditor: number;
  isAccepted: boolean;
  acceptDate?: Date;
  userAcceptor?:number;
  isBankAccepted:boolean;
  bankAcceptDate?:Date;
  userBankAcceptor?:number;
  cardNumber:string;
  accountNumber:string;
}
