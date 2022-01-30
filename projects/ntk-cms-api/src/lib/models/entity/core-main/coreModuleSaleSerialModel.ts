import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';
import { CoreModuleSaleInvoiceModel } from './coreModuleSaleInvoiceModel';
import { CoreSiteModel } from './coreSiteModel';

export class CoreModuleSaleSerialModel extends BaseEntity<number>  {
  DatePeriodStart: Date;
  DatePeriodEnd: Date;
  HasUsed: boolean;
  HasDemo: boolean;
  SerialNumber: string;
  AllowReuseDay: number;
  PwdForUse: string;
  NumberOfMaxUse: number;
  MaxExpireToUse?: Date;
  NumberOfRegistered: number;
  LinkSiteIdDeposit?: number;
  LinkUserIdDeposit?: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteDeposit: CoreSiteModel;
  LinkModuleSaleHeaderId: number;

  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleHeader: CoreModuleSaleHeaderModel;
  ModuleSaleInvoices: CoreModuleSaleInvoiceModel[];
}
