
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderSourceModel } from '../../models/entity/data-provider/dataProviderSourceModel';

@Injectable()
export class DataProviderSourceService extends ApiCmsServerBase<DataProviderSourceModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderSource';
  }
}
