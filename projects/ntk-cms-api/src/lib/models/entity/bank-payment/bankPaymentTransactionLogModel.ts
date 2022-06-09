import { EnumTransactionRecordStatus } from '../../enums/enumTransactionRecordStatus';
import { BaseEntity } from '../base/baseEntity';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';

export class BankPaymentTransactionLogModel extends BaseEntity<number> {
  transactionStatus: EnumTransactionRecordStatus;
  linkTransactionId: number;

  // tslint:disable-next-line: variable-name
  virtual_Transaction: BankPaymentTransactionModel;
  transaction: BankPaymentTransactionModel;

  memo: string;
}
