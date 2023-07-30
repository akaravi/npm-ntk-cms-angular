
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenNotificationModel } from '../../models/entity/core-token/coreTokenNotificationModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class CoreTokenNotificationService extends ApiCmsServerBase<CoreTokenNotificationModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreTokenNotification';
  }
}
