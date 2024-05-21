
import { CoreLogCurrencyModel } from '../../models/entity/core-log/coreLogCurrencyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreLogCurrencyService extends ApiCmsServerBase<CoreLogCurrencyModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogCurrency';
  }
}
