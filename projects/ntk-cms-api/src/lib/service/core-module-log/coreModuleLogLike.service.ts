import { CoreModuleLogLikeModel } from '../../models/entity/core-module-log/coreModuleLogLikeModel';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleLogLikeService extends ApiCmsServerBase<CoreModuleLogLikeModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreModuleLogLike';
    }
}
