import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
export class CoreSiteDomainAliasService extends ApiCmsServerBase<any, number>  {
  
  getModuleCotrolerUrl(): string {
    return 'CoreSiteDomainAlias';
  }
}
