
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderPlanClientModel } from '../../models/entity/data-provider/dataProviderPlanClientModel';

@Injectable()
export class DataProviderPlanClientService extends ApiCmsServerBase<DataProviderPlanClientModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanClient';
  }
}
