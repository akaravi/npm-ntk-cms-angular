
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderClientModel } from '../../models/entity/data-provider/dataProviderClientModel';

@Injectable()
export class DataProviderClientService extends ApiCmsServerBase<DataProviderClientModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderClient';
  }
}
