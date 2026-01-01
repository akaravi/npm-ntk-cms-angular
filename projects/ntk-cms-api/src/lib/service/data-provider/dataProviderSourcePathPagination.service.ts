import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePathPaginationModel } from '../../models/entity/data-provider/dataProviderSourcePathPaginationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourcePathPaginationService extends ApiCmsServerBase<DataProviderSourcePathPaginationModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePathPagination';
  }
}

