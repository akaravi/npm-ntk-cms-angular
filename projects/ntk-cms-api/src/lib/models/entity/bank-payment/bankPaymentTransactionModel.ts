import { TransactionBankStatusEnum } from '../../enums/base/transactionBankStatusEnum';
import { TransactionRecordStatusEnum } from '../../enums/base/transactionRecordStatusEnum';
import { BaseEntity } from '../base/baseEntity';
import { GetPropertiesInfoModel } from '../base/fieldInfo/getPropertiesInfoModel';
import { BankPaymentPrivateSiteConfigModel } from './bankPaymentPrivateSiteConfigModel';
import { BankPaymentTransactionLogModel } from './bankPaymentTransactionLogModel';
//@@tag-Version-2305051
/**
 * مدل تراکنش پرداخت بانکی
 */
export class BankPaymentTransactionModel extends BaseEntity<number> {
  /** لینک به شناسه سایت خریدار */
  linkSiteIdBuyer: number;
  /** لینک به شناسه سایت فروشنده */
  linkSiteIdSaller: number;
  /** نام ماژول */
  moduleName: string;
  /** نام موجودیت ماژول */
  moduleEntityName: string;
  /** شناسه موجودیت ماژول */
  moduleEntityId: string;

  /** وضعیت تراکنش */
  transactionStatus: TransactionRecordStatusEnum;
  /** وضعیت بانک */
  bankStatus: TransactionBankStatusEnum;
  /** واحد پول */
  currencyUnit: string;
  /** نسبت واحد پول به فروشگاه */
  currencyUnitRatioByShop: number;
  /** پیام موفقیت تراکنش */
  successStatusMessage: string;
  /** پیام آخرین وضعیت */
  lastStatusMessage: string;
  /** پیام بررسی آخرین تراکنش */
  lastTransactionCheckMessage: string;
  /** برگشت از بانک */
  backedFromBank: boolean;
  /** لینک به شناسه تنظیمات خصوصی سایت */
  linkPrivateSiteConfigId: number;
  /** لینک به شناسه کاربر */
  linkUserId: number;
  /** مبلغ */
  amount: number;
  /** مبلغ خالص */
  amountPure: number;
  /** مقادیر */
  stampJsonValues: string;
  /** فرمت مقادیر */
  stampJsonFormatter: GetPropertiesInfoModel[];

  /** مقادیر درخواست شده توسط کاربر از بانک */
  requestBackUserFromBankJsonValues: string;
  /** فرمت مقادیر درخواست شده توسط کاربر از بانک */
  requestBackUserFromBankJsonFormatter: GetPropertiesInfoModel[];

  /** تاریخ قفل آنلاین */
  onlineDateLock: Date;
  /** تاریخ بازشدن قفل آنلاین */
  onlineDateUnlock: Date;
  /** آخرین آدرس در حال استفاده */
  lastUrlAddressInUse: string;
  // tslint:disable-next-line: variable-name
  virtual_PrivateSiteConfig: BankPaymentPrivateSiteConfigModel;
  /** تنظیمات خصوصی سایت */
  privateSiteConfig: BankPaymentPrivateSiteConfigModel;

  /** لینک به شناسه سبد خرید */
  linkModelShopCartId: number;
  /** آزادسازی فاکتور فروش */
  modelShopInvoiceSaleRelease: boolean;
  /** تاریخ آزادسازی فاکتور فروش */
  modelShopInvoiceSaleReleaseDate: Date;
  /** لاگ‌های تراکنش */
  transactionLogs: BankPaymentTransactionLogModel;
  /** آدرس پرداخت تراکنش */
  paymentTransactionUrl: string;
}
