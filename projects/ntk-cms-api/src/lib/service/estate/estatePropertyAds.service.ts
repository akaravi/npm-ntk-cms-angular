
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyAdsModel } from '../../models/entity/estate/estatePropertyAdsModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyAdsService extends ApiCmsServerBase<EstatePropertyAdsModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyAds';
  }
}
