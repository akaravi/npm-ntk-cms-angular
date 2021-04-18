import { BaseEntity } from '../base/baseEntity';
import { BankPaymentPublicConfigModel } from './bankPaymentPublicConfigModel';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';

export class BankPaymentPrivateSiteConfigModel extends BaseEntity<number> {
  Title: string;
  CurrencyUnitRatioByShop: number;

  MaxTransactionAmount: number;
  MinTransactionAmount: number;

  FixFeeTransactionAmount: number;

  PercentFeeTransactionAmount: number;
  LinkPublicConfigId: number;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: BankPaymentPublicConfigModel;
  PublicConfig: BankPaymentPublicConfigModel;

  PrivateConfigJsonValues: string;
  Memo: string;
  Transactions: BankPaymentTransactionModel[];
  LinkModuleFileLogoIdSrc: string;
}
