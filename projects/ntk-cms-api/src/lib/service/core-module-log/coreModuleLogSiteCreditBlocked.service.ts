
import { CoreModuleLogSiteCreditBlockedModel } from '../../models/entity/core-module-log/coreModuleLogSiteCreditBlockedModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogSiteCreditBlockedService extends ApiCmsServerBase<CoreModuleLogSiteCreditBlockedModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleLogSiteCreditBlocked';
    }
}
