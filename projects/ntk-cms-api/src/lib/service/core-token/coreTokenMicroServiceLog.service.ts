
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenMicroServiceLogModel } from '../../models/entity/core-token/coreTokenMicroServiceLogModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class CoreTokenMicroServiceLogService extends ApiCmsServerBase<CoreTokenMicroServiceLogModel, string,FilterModel>  {
   getModuleControllerUrl(): string {
    return 'CoreTokenMicroServiceLog';
  }
}
