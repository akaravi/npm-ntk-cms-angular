import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';

export class CoreSiteDomainAliasModel extends BaseEntity<number>  {
  CmsSite: CoreSiteModel;
  SubDomain: string;
  Domain: string;
  Redirect: string;
  LinkCmsSiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
  ConfigNeshanMapApiKey: string;
}
