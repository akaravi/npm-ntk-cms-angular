import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLogMicroServicePingModel } from '../../models/entity/core-log/coreLogMicroServicePingModel';

import { Injectable } from '@angular/core';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreLogMicroServicePingService extends ApiCmsServerBase<
  CoreLogMicroServicePingModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreLogMicroServicePing';
  }
}
