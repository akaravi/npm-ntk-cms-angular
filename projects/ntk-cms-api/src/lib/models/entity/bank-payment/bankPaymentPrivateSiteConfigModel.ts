import { BaseEntity } from '../base/baseEntity';
import { BankPaymentPublicConfigModel } from './bankPaymentPublicConfigModel';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';
//@@tag-Version-2201011
export class BankPaymentPrivateSiteConfigModel extends BaseEntity<number> {
  title: string;
  currencyUnitRatioByShop: number;

  maxTransactionAmount: number;
  minTransactionAmount: number;

  fixFeeTransactionAmount: number;

  percentFeeTransactionAmount: number;
  linkPublicConfigId: number;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: BankPaymentPublicConfigModel;
  publicConfig: BankPaymentPublicConfigModel;

  privateConfigJsonValues: string;
  memo: string;
  transactions: BankPaymentTransactionModel[];
  linkModuleFileLogoIdSrc: string;
}
