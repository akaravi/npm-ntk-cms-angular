
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderLogSourceModel } from '../../models/entity/data-provider/dataProviderLogSourceModel';

@Injectable()
export class DataProviderLogSourceService extends ApiCmsServerBase<DataProviderLogSourceModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DataProviderLogSource';
  }
}
