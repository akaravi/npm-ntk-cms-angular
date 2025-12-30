import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenAuthUserLogModel } from '../../models/entity/core-token/coreTokenAuthUserLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenAuthUserLogService extends ApiCmsServerBase<
  CoreTokenAuthUserLogModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreTokenAuthUserLog';
  }
}
