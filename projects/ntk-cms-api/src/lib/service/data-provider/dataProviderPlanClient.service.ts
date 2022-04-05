
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderPlanClientModel } from '../../models/entity/data-provider/dataProviderPlanClientModel';

@Injectable()
export class DataProviderPlanClientService extends ApiCmsServerBase<DataProviderPlanClientModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanClient';
  }
}
