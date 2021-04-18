import { EnumCmsModuleSaleItemType } from '../../enums/core/enumCmsModuleSaleItemType';
import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleSaleInvoiceModel } from './coreModuleSaleInvoiceModel';

export class CoreModuleSaleInvoiceDetailModel extends BaseEntity<number>  {
  FromDate: Date;
  ExpireDate?: Date;
  SalePrice: number;
  EnumCmsModuleSaleItemType: EnumCmsModuleSaleItemType;
  LinkModuleId: number;
  // tslint:disable-next-line: variable-name
  virtual_Module: CoreModuleModel;
  Description: string;
  ErrorMessage: string;
  HasWarning: boolean;
  HasError: boolean;
  LinkModuleSaleInvoiceId: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleInvoice: CoreModuleSaleInvoiceModel;
}
