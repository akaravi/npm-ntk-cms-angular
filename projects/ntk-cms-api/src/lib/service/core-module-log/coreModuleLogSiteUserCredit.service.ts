
import { CoreModuleLogSiteUserCreditModel } from '../../models/entity/core-module-log/coreModuleLogSiteUserCreditModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogSiteUserCreditService extends ApiCmsServerBase<CoreModuleLogSiteUserCreditModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogSiteUserCredit';
  }
}
