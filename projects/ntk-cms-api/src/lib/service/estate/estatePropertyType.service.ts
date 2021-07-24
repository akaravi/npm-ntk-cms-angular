
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyTypeModel } from '../../models/entity/estate/estatePropertyTypeModel';

@Injectable({
  providedIn: 'root',
})
export class EstatePropertyTypeService extends ApiCmsServerBase<EstatePropertyTypeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyType';
  }
}
