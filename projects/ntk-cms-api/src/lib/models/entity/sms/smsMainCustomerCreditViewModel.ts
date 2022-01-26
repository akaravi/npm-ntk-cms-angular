import { BaseModuleEntity } from '../base/baseModuleEntity';
export class SmsMainCustomerCreditViewModel extends BaseModuleEntity<string> {
  Number: string;
  Description: string;
  Debtor: number;
  Creditor: number;
  IsAccepted: boolean;
  AcceptDate?: Date;
  UserAcceptor?:number;
  IsBankAccepted:boolean;
  BankAcceptDate?:Date;
  UserBankAcceptor?:number;
  CardNumber:string;
  AccountNumber:string;
}
