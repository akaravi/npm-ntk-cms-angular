
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderPlanModel } from '../../models/entity/data-provider/dataProviderPlanModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderPlanService extends ApiCmsServerBase<DataProviderPlanModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderPlan';
  }
}
