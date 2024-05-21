import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';
//@@tag-Version-2201011
export class CoreSiteDomainAliasModel extends BaseEntity<number> {
  cmsSite: CoreSiteModel;
  subDomain: string;
  domain: string;
  redirect: string;
  linkCmsSiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
  configNeshanMapApiKey: string;
}
