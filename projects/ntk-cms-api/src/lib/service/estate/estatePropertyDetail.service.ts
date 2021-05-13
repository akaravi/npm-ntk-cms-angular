
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyDetailModel } from '../../models/entity/estate/estatePropertyDetailModel';

@Injectable()
export class EstatePropertyDetailService extends ApiCmsServerBase<EstatePropertyDetailModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyDetail';
  }
}
