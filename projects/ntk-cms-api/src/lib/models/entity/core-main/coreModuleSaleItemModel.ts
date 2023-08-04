import { EnumCmsModuleSaleItemType } from '../../enums/core/cmsModuleSaleItemTypeEnum';
import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreModuleSaleHeaderModel } from './coreModuleSaleHeaderModel';
//@@tag-Version-2201011
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
