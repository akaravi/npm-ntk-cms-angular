
import { CoreModuleLogScoreModel } from '../../models/entity/coreModuleLog/coreModuleLogScoreModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogScoreService extends ApiCmsServerBase<CoreModuleLogScoreModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleLogScore';
  }
}
