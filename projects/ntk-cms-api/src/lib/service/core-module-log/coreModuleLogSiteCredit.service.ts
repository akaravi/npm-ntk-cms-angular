
import { CoreModuleLogSiteCreditModel } from '../../models/entity/core-module-log/coreModuleLogSiteCreditModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogSiteCreditService extends ApiCmsServerBase<CoreModuleLogSiteCreditModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogSiteCredit';
  }
}
