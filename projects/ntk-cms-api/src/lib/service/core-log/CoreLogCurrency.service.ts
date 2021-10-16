
import { CoreLogCurrencyModel } from '../../models/entity/core-log/coreLogCurrencyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreLogCurrencyService extends ApiCmsServerBase<CoreLogCurrencyModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'CoreLogCurrency';
  }
}
