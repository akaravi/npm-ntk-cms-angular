
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderLogClientModel } from '../../models/entity/data-provider/dataProviderLogClientModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderLogClientService extends ApiCmsServerBase<DataProviderLogClientModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderLogClient';
  }
}
