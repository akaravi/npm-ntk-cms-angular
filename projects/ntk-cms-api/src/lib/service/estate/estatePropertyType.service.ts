
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EstatePropertyTypeService extends ApiCmsServerBase<EstatePropertyTypeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyType';
  }
}
