
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourceModel } from '../../models/entity/data-provider/dataProviderSourceModel';

@Injectable()
export class DataProviderSourceService extends ApiCmsServerBase<DataProviderSourceModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DataProviderSource';
  }
}
