
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyTypeLanduseModel } from '../../models/entity/estate/estatePropertyTypeLanduseModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyTypeLanduseService extends ApiCmsServerBase<EstatePropertyTypeLanduseModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyTypeLanduse';
  }
}
