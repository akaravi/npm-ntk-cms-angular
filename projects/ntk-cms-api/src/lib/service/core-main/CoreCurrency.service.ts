import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCurrencyModel } from '../../models/entity/core-main/coreCurrencyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreCurrencyService extends ApiCmsServerBase<CoreCurrencyModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreCurrency';
  }


}
