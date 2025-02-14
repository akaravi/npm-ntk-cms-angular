
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenConnectionLogModel } from '../../models/entity/core-token/coreTokenConnectionLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenConnectionLogService extends ApiCmsServerBase<CoreTokenConnectionLogModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreTokenConnectionLog';
  }
}
