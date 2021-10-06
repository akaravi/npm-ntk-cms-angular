
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyAdsTypeModel } from '../../models/entity/estate/estatePropertyAdsTypeModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyAdsTypeService extends ApiCmsServerBase<EstatePropertyAdsTypeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyAdsType';
  }
}
