import { EnumCmsModuleSaleItemType } from '../../enums/core/enumCmsModuleSaleItemType';
import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleSaleHeaderGroupModel } from './coreModuleSaleHeaderGroupModel';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';

export class CoreModuleSaleItemModel extends BaseEntity<number>  {
  LinkModuleSaleHeader: number;
  ExpireDate: Date;
  Description: string;
  MonthLength: number;
  LinkModuleId: number;
  SalePrice: number;
  EnumCmsModuleSaleItemType: EnumCmsModuleSaleItemType;
  ModuleSiteAccessJsonValue: string;
  // tslint:disable-next-line: variable-name
  virtual_CmsModuleSaleHeader: CoreModuleSaleHeaderModel;
  // tslint:disable-next-line: variable-name
  virtual_Module: CoreModuleModel;
}
