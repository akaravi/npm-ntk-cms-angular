import { TransactionBankStatusEnum } from '../../enums/base/transactionBankStatusEnum';
import { TransactionRecordStatusEnum } from '../../enums/base/transactionRecordStatusEnum';
import { BaseEntity } from '../base/baseEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { BankPaymentPrivateSiteConfigModel } from './bankPaymentPrivateSiteConfigModel';
import { BankPaymentTransactionLogModel } from './bankPaymentTransactionLogModel';
//@@tag-Version-2305051
export class BankPaymentTransactionModel extends BaseEntity<number> {
  linkSiteIdBuyer: number;
  linkSiteIdSaller: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;

  transactionStatus: TransactionRecordStatusEnum;
  bankStatus: TransactionBankStatusEnum;
  currencyUnit: string;
  currencyUnitRatioByShop: number;
  successStatusMessage: string;
  lastStatusMessage: string;
  lastTransactionCheckMessage: string;
  backedFromBank: boolean;
  linkPrivateSiteConfigId: number;
  linkUserId: number;
  amount: number;
  amountPure: number;
  stampJsonValues: string;
  stampJsonFormatter: GetPropertiesInfoModel[];

  requestBackUserFromBankJsonValues: string;
  requestBackUserFromBankJsonFormatter: GetPropertiesInfoModel[];

  onlineDateLock: Date;
  onlineDateUnlock: Date;
  lastUrlAddressInUse: string;
  // tslint:disable-next-line: variable-name
  virtual_PrivateSiteConfig: BankPaymentPrivateSiteConfigModel;
  privateSiteConfig: BankPaymentPrivateSiteConfigModel;

  linkModelShopCartId: number;
  modelShopInvoiceSaleRelease: boolean;
  modelShopInvoiceSaleReleaseDate: Date;
  transactionLogs: BankPaymentTransactionLogModel;
  paymentTransactionUrl: string;
}
