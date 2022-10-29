
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateActivityTypeModel } from '../../models/entity/estate/estateActivityTypeModel';

@Injectable()
export class EstateActivityTypeService extends ApiCmsServerBase<EstateActivityTypeModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateActivityType';
  }
}
