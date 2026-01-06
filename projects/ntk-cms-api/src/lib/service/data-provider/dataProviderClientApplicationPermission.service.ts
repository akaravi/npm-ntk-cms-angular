import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderClientApplicationPermissionModel } from '../../models/entity/data-provider/dataProviderClientApplicationPermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderClientApplicationPermissionService extends ApiCmsServerBase<DataProviderClientApplicationPermissionModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderClientApplicationPermission';
  }
}

