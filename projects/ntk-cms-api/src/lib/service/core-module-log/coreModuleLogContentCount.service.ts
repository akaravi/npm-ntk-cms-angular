
import { CoreModuleLogContentCountModel } from '../../models/entity/core-module-log/coreModuleLogContentCountModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogContentCountService extends ApiCmsServerBase<CoreModuleLogContentCountModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogContentCount';
  }
}
