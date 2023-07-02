
import { CoreLogErrorModel } from '../../models/entity/core-log/coreLogErrorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogErrorService extends ApiCmsServerBase<CoreLogErrorModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreLogError';
  }
}
