
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderLogClientModel } from '../../models/entity/data-provider/dataProviderLogClientModel';

@Injectable()
export class DataProviderLogClientService extends ApiCmsServerBase<DataProviderLogClientModel, string>  {
  getModuleControllerUrl(): string {
    return 'DataProviderLogClient';
  }
}
