
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderClientModel } from '../../models/entity/data-provider/dataProviderClientModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderClientService extends ApiCmsServerBase<DataProviderClientModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderClient';
  }
}
