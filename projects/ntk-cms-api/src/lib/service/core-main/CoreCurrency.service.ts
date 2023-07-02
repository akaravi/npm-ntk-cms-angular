import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCurrencyModel } from '../../models/entity/core-main/coreCurrencyModel';

@Injectable()
export class CoreCurrencyService extends ApiCmsServerBase<CoreCurrencyModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreCurrency';
  }


}
