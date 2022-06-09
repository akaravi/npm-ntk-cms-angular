import { EnumCmsModuleSaleItemType } from '../../enums/core/enumCmsModuleSaleItemType';
import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';

export class CoreModuleSaleItemModel extends BaseEntity<number>  {
  linkModuleSaleHeader: number;
  expireDate: Date;
  description: string;
  monthLength: number;
  linkModuleId: number;
  enumCmsModuleSaleItemType: EnumCmsModuleSaleItemType;
  moduleSiteAccessJsonValue: string;
  // tslint:disable-next-line: variable-name
  virtual_CmsModuleSaleHeader: CoreModuleSaleHeaderModel;
  // tslint:disable-next-line: variable-name
  virtual_Module: CoreModuleModel;
}
