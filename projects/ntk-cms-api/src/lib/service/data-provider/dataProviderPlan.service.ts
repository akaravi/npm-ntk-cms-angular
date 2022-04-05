
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderPlanModel } from '../../models/entity/data-provider/dataProviderPlanModel';

@Injectable()
export class DataProviderPlanService extends ApiCmsServerBase<DataProviderPlanModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlan';
  }
}
