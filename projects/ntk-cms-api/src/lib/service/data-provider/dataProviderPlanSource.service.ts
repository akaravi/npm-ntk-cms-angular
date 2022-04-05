
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderPlanSourceModel } from '../../models/entity/data-provider/dataProviderPlanSourceModel';

@Injectable()
export class DataProviderPlanSourceService extends ApiCmsServerBase<DataProviderPlanSourceModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanSource';
  }
}
