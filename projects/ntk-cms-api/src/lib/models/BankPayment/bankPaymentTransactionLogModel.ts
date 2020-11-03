import { BaseEntity } from '../base/baseEntity';
import { EnumTransactionRecordStatus } from '../enums/enumTransactionRecordStatus';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';

export class BankPaymentTransactionLogModel extends BaseEntity<number> {
  TransactionStatus: EnumTransactionRecordStatus;
  LinkTransactionId: number;

  // tslint:disable-next-line: variable-name
  virtual_Transaction: BankPaymentTransactionModel;
  Transaction: BankPaymentTransactionModel;

  Memo: string;
}
