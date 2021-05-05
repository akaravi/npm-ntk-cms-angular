
import { CoreLogSmsModel } from '../../models/entity/core-log/coreLogSmsModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreLogSmsService extends ApiCmsServerBase<CoreLogSmsModel, string>  {  getModuleCotrolerUrl(): string {
    return 'CoreLogSms';
  }
}
