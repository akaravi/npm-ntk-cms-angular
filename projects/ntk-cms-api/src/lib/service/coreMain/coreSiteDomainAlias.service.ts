import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteDomainAliasModel } from '../../models/entity/coreMain/coreSiteDomainAliasModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreSiteDomainAliasService extends ApiCmsServerBase<CoreSiteDomainAliasModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteDomainAlias';
  }
}
