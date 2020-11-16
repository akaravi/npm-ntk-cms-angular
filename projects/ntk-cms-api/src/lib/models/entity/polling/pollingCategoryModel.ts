import { BankPaymentPublicConfigModel } from '../bankPayment/bankPaymentPublicConfigModel';
import { BankPaymentTransactionModel } from '../bankPayment/bankPaymentTransactionModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class PollingCategoryModel extends BaseModuleEntity<number>  {
  Title: string;
  CurrencyUnitRatioByShop: number;
  MaxTransactionAmount: number;
  MinTransactionAmount: number;
  FixFeeTransactionAmount: number;
  PercentFeeTransactionAmount: number;
  LinkPublicConfigId?: number;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: BankPaymentPublicConfigModel;
  PublicConfig: BankPaymentPublicConfigModel;
  PrivateConfigJsonValues: string;
  Memo: string;
  Transactions: BankPaymentTransactionModel[];
  LinkModuleFileLogoIdSrc: string;

  LinkMainImageId?: number;
  LinkMainImageIdSrc: string;
}
