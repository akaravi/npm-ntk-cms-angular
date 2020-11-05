import { EnumTransactionBankStatus } from '../../enums/enumTransactionBankStatus';
import { EnumTransactionRecordStatus } from '../../enums/enumTransactionRecordStatus';
import { BaseEntity } from '../base/baseEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { BankPaymentPrivateSiteConfigModel } from './bankPaymentPrivateSiteConfigModel';
import { BankPaymentTransactionLogModel } from './bankPaymentTransactionLogModel';


export class BankPaymentTransactionModel extends BaseEntity<number> {
  TransactionStatus: EnumTransactionRecordStatus;
  BankStatus: EnumTransactionBankStatus;
  CurrencyUnit: string;
  CurrencyUnitRatioByShop: number;
  SuccessStatusMessage: string;
  LastStatusMessage: string;
  LastTransactionCheckMessage: string;
  BackedFromBank: boolean;
  LinkPrivateSiteConfigId: number;
  LinkUserId: number;
  Amount: number;
  AmountPure: number;
  StampJsonValues: string;
  StampJsonFormatter: GetPropertiesInfoModel[];

  RequestBackUserFromBankJsonValues: string;
  RequestBackUserFromBankJsonFormatter: GetPropertiesInfoModel[];

  OnlineDateLock: Date;
  OnlineDateUnlock: Date;
  LastUrlAddressInUse: string;
  // tslint:disable-next-line: variable-name
  virtual_PrivateSiteConfig: BankPaymentPrivateSiteConfigModel;
  PrivateSiteConfig: BankPaymentPrivateSiteConfigModel;

  LinkModelShopCartId: number;
  ModelShopInvoiceSaleRelease: boolean;
  ModelShopInvoiceSaleReleaseDate: Date;
  TransactionLogs: BankPaymentTransactionLogModel;
}
