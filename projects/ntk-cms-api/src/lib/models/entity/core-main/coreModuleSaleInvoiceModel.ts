import { BaseEntity } from '../base/baseEntity';
import { CoreModuleSaleInvoiceDetailModel } from './coreModuleSaleInvoiceDetailModel';
import { CoreModuleSaleSerialModel } from './coreModuleSaleSerialModel';
import { CoreSiteModel } from './coreSiteModel';

export class CoreModuleSaleInvoiceModel extends BaseEntity<number>  {
  LinkSiteIdBuyer: number;
  // tslint:disable-next-line: variable-name
  virtual_SiteBuyer: CoreSiteModel;
  HasUsed: boolean;
  Price: number;
  LinkModuleSaleSerialId: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleSerial: CoreModuleSaleSerialModel;
  Amount: number;
  SystemTransactionId: number;
  SystemPaymentIsSuccess: number;
  ModuleSaleInvoiceDetails: CoreModuleSaleInvoiceDetailModel[];
}
