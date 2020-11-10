import { BaseEntity } from '../base/baseEntity';
import { CoreSiteModel } from './coreSiteModel';

export class CoreSiteDomainAliasModel extends BaseEntity<number>  {
  CmsSite: CoreSiteModel;
  subDomain: string;
  domain: string;
  redirect: string;
  linkCmsSiteId?: number;
  // tslint:disable-next-line: variable-name
  virtual_CmsSite: CoreSiteModel;
}