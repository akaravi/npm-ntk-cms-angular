import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePathModel } from '../../models/entity/data-provider/dataProviderSourcePathModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourcePathService extends ApiCmsServerBase<DataProviderSourcePathModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePath';
  }
}

