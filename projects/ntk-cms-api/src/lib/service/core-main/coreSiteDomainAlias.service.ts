import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteDomainAliasModel } from '../../models/entity/core-main/coreSiteDomainAliasModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreSiteDomainAliasService extends ApiCmsServerBase<CoreSiteDomainAliasModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreSiteDomainAlias';
    }
}
