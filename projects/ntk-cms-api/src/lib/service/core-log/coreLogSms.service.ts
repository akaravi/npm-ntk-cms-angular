
import { CoreLogSmsModel } from '../../models/entity/core-log/coreLogSmsModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogSmsService extends ApiCmsServerBase<CoreLogSmsModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogSms';
  }
}
