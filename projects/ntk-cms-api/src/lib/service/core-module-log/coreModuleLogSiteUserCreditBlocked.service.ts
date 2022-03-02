
import { CoreModuleLogSiteUserCreditBlockedModel } from '../../models/entity/core-module-log/coreModuleLogSiteUserCreditBlockedModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogSiteUserCreditBlockedService extends ApiCmsServerBase<CoreModuleLogSiteUserCreditBlockedModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogSiteUserCreditBlocked';
  }
}
