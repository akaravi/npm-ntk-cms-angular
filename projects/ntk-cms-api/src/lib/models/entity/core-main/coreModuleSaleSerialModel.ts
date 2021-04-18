import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';
import { CoreModuleSaleInvoiceModel } from './coreModuleSaleInvoiceModel';
import { CoreSiteModel } from './coreSiteModel';

export class CoreModuleSaleSerialModel extends BaseEntity<number>  {
  ExpireDate: Date;
  Price: number;
  HasUsed: boolean;
  HasDemo: boolean;
  SerialNumber: string;
  PwdForUse: string;
  NumberOfMaxUse: number;
  MaxExpireToUse?: Date;
  NumberOfRegistered: number;
  LinkSiteIdDeposit?: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteDeposit: CoreSiteModel;
  LinkModuleSaleHeaderId: number;
  LinkSiteIdBuyer?: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleHeader: CoreModuleSaleHeaderModel;
  ModuleSaleInvoices: CoreModuleSaleInvoiceModel[];
}
