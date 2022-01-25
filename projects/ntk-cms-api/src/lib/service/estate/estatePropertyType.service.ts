
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyTypeModel } from '../../models/entity/estate/estatePropertyTypeModel';

@Injectable()
export class EstatePropertyTypeService extends ApiCmsServerBase<EstatePropertyTypeModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyType';
  }
}
