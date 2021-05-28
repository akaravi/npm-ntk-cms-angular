
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyTypeUsageModel } from '../../models/entity/estate/estatePropertyTypeUsageModel';

@Injectable()
export class EstatePropertyTypeUsageService extends ApiCmsServerBase<EstatePropertyTypeUsageModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstatePropertyTypeUsage';
  }
}
