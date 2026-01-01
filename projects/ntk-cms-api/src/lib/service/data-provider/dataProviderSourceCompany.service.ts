import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourceCompanyModel } from '../../models/entity/data-provider/dataProviderSourceCompanyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourceCompanyService extends ApiCmsServerBase<DataProviderSourceCompanyModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourceCompany';
  }
}

