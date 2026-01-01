import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePathPermissionModel } from '../../models/entity/data-provider/dataProviderSourcePathPermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class DataProviderSourcePathPermissionService extends ApiCmsServerBase<DataProviderSourcePathPermissionModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePathPermission';
  }
}

