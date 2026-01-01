import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourceCategoryModel } from '../../models/entity/data-provider/dataProviderSourceCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourceCategoryService extends ApiCmsServerBase<DataProviderSourceCategoryModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourceCategory';
  }
}

