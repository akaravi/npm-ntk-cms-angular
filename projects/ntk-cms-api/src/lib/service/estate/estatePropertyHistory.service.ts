
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyHistoryModel } from '../../models/entity/estate/estatePropertyHistoryModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyHistoryService extends ApiCmsServerBase<EstatePropertyHistoryModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyHistory';
  }
}
