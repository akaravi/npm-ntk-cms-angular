
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderPlanPriceModel } from '../../models/entity/data-provider/dataProviderPlanPriceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderPlanPriceService extends ApiCmsServerBase<DataProviderPlanPriceModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanPrice';
  }
}
