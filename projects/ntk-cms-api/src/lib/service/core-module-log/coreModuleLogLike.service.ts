import { CoreModuleLogLikeModel } from '../../models/entity/core-module-log/coreModuleLogLikeModel';

import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogLikeService extends ApiCmsServerBase<CoreModuleLogLikeModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogLike';
  }
}
