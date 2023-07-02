
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderPlanCategoryModel } from '../../models/entity/data-provider/dataProviderPlanCategoryModel';

@Injectable()
export class DataProviderPlanCategoryService extends ApiCmsServerBase<DataProviderPlanCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DataProviderPlanCategory';
  }
}
