import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteDomainAliasModel } from '../../models/entity/coreMain/coreSiteDomainAliasModel';
export class CoreSiteDomainAliasService extends ApiCmsServerBase<CoreSiteDomainAliasModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteDomainAlias';
  }
}
