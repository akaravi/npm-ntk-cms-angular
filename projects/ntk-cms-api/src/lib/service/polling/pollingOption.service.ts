import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { PollingOptionModel } from '../../models/entity/polling/pollingOptionModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PollingOptionService extends ApiCmsServerBase<PollingOptionModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'PollingOption';
  }
}
