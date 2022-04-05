
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderPlanCategoryModel } from '../../models/entity/data-provider/dataProviderPlanCategoryModel';

@Injectable()
export class DataProviderPlanCategoryService extends ApiCmsServerBase<DataProviderPlanCategoryModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanCategory';
  }
}
