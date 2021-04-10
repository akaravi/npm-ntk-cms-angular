
import { CoreLogErrorModel } from '../../models/entity/coreLog/coreLogErrorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreLogErrorService extends ApiCmsServerBase<CoreLogErrorModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreLogError';
  }
}
