import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreCurrencyModel } from '../../models/entity/core-main/coreCurrencyModel';

@Injectable({
  providedIn: 'root',
})
export class CoreCurrencyService extends ApiCmsServerBase<CoreCurrencyModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreCurrency';
  }


}
