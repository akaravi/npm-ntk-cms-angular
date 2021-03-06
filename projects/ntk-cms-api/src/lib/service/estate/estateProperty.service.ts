
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyModel } from '../../models/entity/estate/estatePropertyModel';

@Injectable()
export class EstatePropertyService extends ApiCmsServerBase<EstatePropertyModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateProperty';
  }
}
