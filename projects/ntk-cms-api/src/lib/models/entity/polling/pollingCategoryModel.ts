import { BankPaymentPublicConfigModel } from '../bankPayment/bankPaymentPublicConfigModel';
import { BankPaymentTransactionModel } from '../bankPayment/bankPaymentTransactionModel';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class PollingCategoryModel extends BaseModuleEntity<number>  {

  Title: string;
  currencyUnitRatioByShop: number;
  maxTransactionAmount: number;
  minTransactionAmount: number;
  fixFeeTransactionAmount: number;
  percentFeeTransactionAmount: number;
  linkPublicConfigId?: number;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: BankPaymentPublicConfigModel;
  publicConfig: BankPaymentPublicConfigModel;
  privateConfigJsonValues: string;
  memo: string;
  transactions: BankPaymentTransactionModel[];
  linkModuleFileLogoIdSrc: string;

}
