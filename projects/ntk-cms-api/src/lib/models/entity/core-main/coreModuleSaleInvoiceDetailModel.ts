import { EnumCmsModuleSaleItemType } from '../../enums/core/enumCmsModuleSaleItemType';
import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleSaleInvoiceModel } from './coreModuleSaleInvoiceModel';
//@@tag-Version-2201011
export class CoreModuleSaleInvoiceDetailModel extends BaseEntity<number>  {
  fromDate: Date;
  expireDate?: Date;
  salePrice: number;
  enumCmsModuleSaleItemType: EnumCmsModuleSaleItemType;
  linkModuleId: number;
  // tslint:disable-next-line: variable-name
  virtual_Module: CoreModuleModel;
  description: string;
  errorMessage: string;
  hasWarning: boolean;
  hasError: boolean;
  linkModuleSaleInvoiceId: number;
  // tslint:disable-next-line: variable-name
  virtual_ModuleSaleInvoice: CoreModuleSaleInvoiceModel;
}
