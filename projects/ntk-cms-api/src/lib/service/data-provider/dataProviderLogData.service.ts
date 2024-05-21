
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderLogDataModel } from '../../models/entity/data-provider/dataProviderLogDataModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderLogDataService extends ApiCmsServerBase<DataProviderLogDataModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderLogData';
  }
}
