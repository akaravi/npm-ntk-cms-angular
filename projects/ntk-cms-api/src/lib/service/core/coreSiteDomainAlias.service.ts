import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
export class CoreSiteDomainAliasService extends ApiCmsServerBase<any, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteDomainAlias';
  }
}
