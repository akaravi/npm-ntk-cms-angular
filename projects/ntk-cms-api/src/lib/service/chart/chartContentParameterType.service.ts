import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ChartContentParameterTypeService extends ApiCmsServerBase<any, number>  {
  getModuleCotrolerUrl(): string {
    return 'ChartContentParameterType';
  }
}
