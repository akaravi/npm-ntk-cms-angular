
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenNotificationLogModel } from '../../models/entity/core-token/coreTokenNotificationLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenNotificationLogService extends ApiCmsServerBase<CoreTokenNotificationLogModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreTokenNotificationLog';
  }
}
