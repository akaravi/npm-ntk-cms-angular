import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteDomainAliasModel } from '../../models/entity/core-main/coreSiteDomainAliasModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreSiteDomainAliasService extends ApiCmsServerBase<CoreSiteDomainAliasModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreSiteDomainAlias';
  }
}
