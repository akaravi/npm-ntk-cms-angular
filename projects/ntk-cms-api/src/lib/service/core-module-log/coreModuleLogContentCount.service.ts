
import { CoreModuleLogContentCountModel } from '../../models/entity/core-module-log/coreModuleLogContentCountModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogContentCountService extends ApiCmsServerBase<CoreModuleLogContentCountModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogContentCount';
  }
}
