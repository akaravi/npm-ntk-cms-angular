import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';
import { CoreModuleSaleInvoiceModel } from './coreModuleSaleInvoiceModel';
import { CoreSiteModel } from './coreSiteModel';
//@@tag-Version-2201011
export class CoreModuleSaleSerialModel extends BaseEntity<number>  {
  datePeriodStart: Date;
  datePeriodEnd: Date;
  hasUsed: boolean;
  hasDemo: boolean;
  serialNumber: string;
  allowReuseDay: number;
  pwdForUse: string;
  numberOfMaxUse: number;
  maxExpireToUse?: Date;
  numberOfRegistered: number;
  linkSiteIdDeposit?: number;
  linkUserIdDeposit?: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteDeposit: CoreSiteModel;
  linkModuleSaleHeaderId: number;

  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleHeader: CoreModuleSaleHeaderModel;
  moduleSaleInvoices: CoreModuleSaleInvoiceModel[];
}
