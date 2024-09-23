
import { CoreLogEmailModel } from '../../models/entity/core-log/coreLogEmailModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogEmailService extends ApiCmsServerBase<CoreLogEmailModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogEmail';
  }
}
