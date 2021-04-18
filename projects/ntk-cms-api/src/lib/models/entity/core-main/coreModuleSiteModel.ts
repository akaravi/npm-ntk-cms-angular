import { CoreSiteModel } from './coreSiteModel';
import { CoreModuleModel } from './coreModuleModel';
import { BaseEntity } from '../base/baseEntity';

export class CoreModuleSiteModel extends BaseEntity<number>  {
  ExpireDate?: Date;
  LinkSiteId: number;
  Title: string;
  LinkModuleId: number;
  RenewDate?: string;
  HasBuyed: boolean;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
  CmsSite: CoreSiteModel;
  // tslint:disable-next-line: variable-name
  virtual_CmsModule: CoreModuleModel;
  CmsModule: CoreModuleModel;
  ModuleConfigSiteAccessValuesJson: string;
  ModuleConfigSiteValuesJson: string;
  ModuleSiteStorageValuesJson: string;
}
