import { EnumTransactionRecordStatus } from '../../enums/base/enumTransactionRecordStatus';
import { BaseEntity } from '../base/baseEntity';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';
//@@tag-Version-2201011
export class BankPaymentTransactionLogModel extends BaseEntity<number> {
  transactionStatus: EnumTransactionRecordStatus;
  linkTransactionId: number;

  // tslint:disable-next-line: variable-name
  virtual_Transaction: BankPaymentTransactionModel;
  transaction: BankPaymentTransactionModel;

  memo: string;
}
