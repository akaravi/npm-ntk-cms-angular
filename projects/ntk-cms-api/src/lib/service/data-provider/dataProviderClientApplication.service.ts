import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderClientApplicationModel } from '../../models/entity/data-provider/dataProviderClientApplicationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderClientApplicationService extends ApiCmsServerBase<
  DataProviderClientApplicationModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'DataProviderClientApplication';
  }
}

