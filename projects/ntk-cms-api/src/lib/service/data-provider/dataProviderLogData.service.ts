
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderLogDataModel } from '../../models/entity/data-provider/dataProviderLogDataModel';

@Injectable()
export class DataProviderLogDataService extends ApiCmsServerBase<DataProviderLogDataModel, string>  {
  getModuleControllerUrl(): string {
    return 'DataProviderLogData';
  }
}
