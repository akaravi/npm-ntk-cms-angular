
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAdsTypeModel } from '../../models/entity/estate/estateAdsTypeModel';

@Injectable({
  providedIn: 'root',
})
export class EstateAdsTypeService extends ApiCmsServerBase<EstateAdsTypeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateAdsType';
  }
}
