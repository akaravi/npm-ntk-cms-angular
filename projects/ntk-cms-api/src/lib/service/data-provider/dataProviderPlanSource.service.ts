
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderPlanSourceModel } from '../../models/entity/data-provider/dataProviderPlanSourceModel';

@Injectable()
export class DataProviderPlanSourceService extends ApiCmsServerBase<DataProviderPlanSourceModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanSource';
  }
}
