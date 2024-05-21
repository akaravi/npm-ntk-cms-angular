
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenUserLogModel } from '../../models/entity/core-token/coreTokenUserLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenUserLogService extends ApiCmsServerBase<CoreTokenUserLogModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreTokenUserLog';
    }
}
