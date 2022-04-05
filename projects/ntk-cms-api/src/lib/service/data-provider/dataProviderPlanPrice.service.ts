
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderPlanPriceModel } from '../../models/entity/data-provider/dataProviderPlanPriceModel';

@Injectable()
export class DataProviderPlanPriceService extends ApiCmsServerBase<DataProviderPlanPriceModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanPrice';
  }
}
