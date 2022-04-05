
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderLogPlanModel } from '../../models/entity/data-provider/dataProviderLogPlanModel';

@Injectable()
export class DataProviderLogPlanService extends ApiCmsServerBase<DataProviderLogPlanModel, string>  {
  getModuleControllerUrl(): string {
    return 'DataProviderLogPlan';
  }
}
