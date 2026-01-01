import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePathAndCategoryModel } from '../../models/entity/data-provider/dataProviderSourcePathAndCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourcePathAndCategoryService extends ApiCmsServerBase<DataProviderSourcePathAndCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePathAndCategory';
  }
}

