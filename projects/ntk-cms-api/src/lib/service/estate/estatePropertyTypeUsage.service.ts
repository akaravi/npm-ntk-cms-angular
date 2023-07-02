
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyTypeUsageModel } from '../../models/entity/estate/estatePropertyTypeUsageModel';

@Injectable()
export class EstatePropertyTypeUsageService extends ApiCmsServerBase<EstatePropertyTypeUsageModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyTypeUsage';
  }
}
