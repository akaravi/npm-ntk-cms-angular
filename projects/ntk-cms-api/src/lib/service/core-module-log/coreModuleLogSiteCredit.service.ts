
import { CoreModuleLogSiteCreditModel } from '../../models/entity/core-module-log/coreModuleLogSiteCreditModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogSiteCreditService extends ApiCmsServerBase<CoreModuleLogSiteCreditModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogSiteCredit';
  }
}
