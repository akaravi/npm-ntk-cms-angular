
import { CoreModuleLogSiteUserCreditBlockedModel } from '../../models/entity/core-module-log/coreModuleLogSiteUserCreditBlockedModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogSiteUserCreditBlockedService extends ApiCmsServerBase<CoreModuleLogSiteUserCreditBlockedModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleLogSiteUserCreditBlocked';
    }
}
