
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateActivityTypeModel } from '../../models/entity/estate/estateActivityTypeModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateActivityTypeService extends ApiCmsServerBase<EstateActivityTypeModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateActivityType';
  }
}
