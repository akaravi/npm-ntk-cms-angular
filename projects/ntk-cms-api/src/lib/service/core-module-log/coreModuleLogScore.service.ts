
import { CoreModuleLogScoreModel } from '../../models/entity/core-module-log/coreModuleLogScoreModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleLogScoreService extends ApiCmsServerBase<CoreModuleLogScoreModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreModuleLogScore';
  }
}
