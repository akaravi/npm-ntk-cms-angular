import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePublicConfigModel } from '../../models/entity/data-provider/dataProviderSourcePublicConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourcePublicConfigService extends ApiCmsServerBase<DataProviderSourcePublicConfigModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePublicConfig';
  }
}

