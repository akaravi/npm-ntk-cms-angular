import { TransactionRecordStatusEnum } from '../../enums/base/transactionRecordStatusEnum';
import { BaseEntity } from '../base/baseEntity';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';
//@@tag-Version-2201011
/**
 * مدل لاگ تراکنش پرداخت بانکی
 */
export class BankPaymentTransactionLogModel extends BaseEntity<number> {
  /** وضعیت تراکنش */
  transactionStatus: TransactionRecordStatusEnum;
  /** لینک به شناسه تراکنش */
  linkTransactionId: number;

  // tslint:disable-next-line: variable-name
  virtual_Transaction: BankPaymentTransactionModel;
  /** تراکنش */
  transaction: BankPaymentTransactionModel;

  /** یادداشت */
  memo: string;
}
