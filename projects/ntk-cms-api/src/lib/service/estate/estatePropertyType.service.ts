
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyTypeModel } from '../../models/entity/estate/estatePropertyTypeModel';

@Injectable()
export class EstatePropertyTypeService extends ApiCmsServerBase<EstatePropertyTypeModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyType';
  }
}
