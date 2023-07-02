
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderClientModel } from '../../models/entity/data-provider/dataProviderClientModel';

@Injectable()
export class DataProviderClientService extends ApiCmsServerBase<DataProviderClientModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DataProviderClient';
  }
}
