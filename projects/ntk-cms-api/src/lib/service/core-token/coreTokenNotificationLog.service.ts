
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenNotificationLogModel } from '../../models/entity/core-token/coreTokenNotificationLogModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class CoreTokenNotificationLogService extends ApiCmsServerBase<CoreTokenNotificationLogModel, string,FilterModel>  {
   getModuleControllerUrl(): string {
    return 'CoreTokenNotificationLog';
  }
}
