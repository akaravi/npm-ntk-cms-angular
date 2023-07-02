
import { CoreModuleLogSiteUserCreditModel } from '../../models/entity/core-module-log/coreModuleLogSiteUserCreditModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogSiteUserCreditService extends ApiCmsServerBase<CoreModuleLogSiteUserCreditModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogSiteUserCredit';
  }
}
