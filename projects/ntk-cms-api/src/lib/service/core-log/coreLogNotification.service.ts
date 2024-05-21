
import { CoreLogNotificationModel } from '../../models/entity/core-log/coreLogNotificationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogNotificationService extends ApiCmsServerBase<CoreLogNotificationModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogNotification';
  }
}
