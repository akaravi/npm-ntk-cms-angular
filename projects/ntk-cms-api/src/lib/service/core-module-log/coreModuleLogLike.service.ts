import { CoreModuleLogLikeModel } from '../../models/entity/core-module-log/coreModuleLogLikeModel';

import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogLikeService extends ApiCmsServerBase<CoreModuleLogLikeModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogLike';
  }
}
