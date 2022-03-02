
import { CoreModuleLogSiteCreditBlockedModel } from '../../models/entity/core-module-log/coreModuleLogSiteCreditBlockedModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogSiteCreditBlockedService extends ApiCmsServerBase<CoreModuleLogSiteCreditBlockedModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogSiteCreditBlocked';
  }
}
