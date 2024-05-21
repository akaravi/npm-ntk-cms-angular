
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderLogPlanModel } from '../../models/entity/data-provider/dataProviderLogPlanModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderLogPlanService extends ApiCmsServerBase<DataProviderLogPlanModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderLogPlan';
  }
}
