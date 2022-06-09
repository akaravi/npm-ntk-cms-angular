import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';
import { CoreModuleSaleInvoiceDetailModel } from './coreModuleSaleInvoiceDetailModel';
import { CoreModuleSaleSerialModel } from './coreModuleSaleSerialModel';
import { CoreSiteModel } from './coreSiteModel';

export class CoreModuleSaleInvoiceModel extends BaseEntity<number>  {
  linkSiteIdBuyer: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteBuyer: CoreSiteModel;
  hasUsed: boolean;
  price: number;
  linkModuleSaleHeaderId?: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleHeader: CoreModuleSaleHeaderModel;
  linkModuleSaleSerialId?: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleSerial: CoreModuleSaleSerialModel;
  amount: number;
  systemTransactionId: number;
  systemPaymentIsSuccess: number;
  moduleSaleInvoiceDetails: CoreModuleSaleInvoiceDetailModel[];
}
