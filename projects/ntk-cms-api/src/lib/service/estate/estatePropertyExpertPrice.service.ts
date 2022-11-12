import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyExpertPriceModel } from '../../models/entity/estate/estatePropertyExpertPriceModel';

@Injectable()
export class EstatePropertyExpertPriceService extends ApiCmsServerBase<EstatePropertyExpertPriceModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyExpertPrice';
  }

}
