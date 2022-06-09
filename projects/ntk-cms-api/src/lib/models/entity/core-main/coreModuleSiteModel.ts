import { CoreSiteModel } from './coreSiteModel';
import { CoreModuleModel } from './coreModuleModel';
import { BaseEntity } from '../base/baseEntity';

export class CoreModuleSiteModel extends BaseEntity<number>  {
  expireDate?: Date;
  linkSiteId: number;
  title: string;
  linkModuleId: number;
  renewDate?: string;
  hasBuyed: boolean;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
  cmsSite: CoreSiteModel;
  // tslint:disable-next-line: variable-name
  virtual_CmsModule: CoreModuleModel;
  cmsModule: CoreModuleModel;
  moduleConfigSiteAccessValuesJson: string;
  moduleConfigSiteValuesJson: string;
  moduleSiteStorageValuesJson: string;
}
