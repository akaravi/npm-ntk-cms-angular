
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderLogSourceModel } from '../../models/entity/data-provider/dataProviderLogSourceModel';

@Injectable()
export class DataProviderLogSourceService extends ApiCmsServerBase<DataProviderLogSourceModel, string>  {
  getModuleControllerUrl(): string {
    return 'DataProviderLogSource';
  }
}
