import { BaseEntity } from '../base/baseEntity';
import { CoreModuleModel } from './coreModuleModel';
import { CoreSiteModel } from './coreSiteModel';
//@@tag-Version-2201011
export class CoreModuleSiteModel extends BaseEntity<number> {
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
