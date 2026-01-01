
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderPlanSourceModel } from '../../models/entity/data-provider/dataProviderPlanSourceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderPlanSourceService extends ApiCmsServerBase<DataProviderPlanSourceModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanSource';
  }
}
