import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderSourcePathPricePermissionModel } from '../../models/entity/data-provider/dataProviderSourcePathPricePermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderSourcePathPricePermissionService extends ApiCmsServerBase<
  DataProviderSourcePathPricePermissionModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'DataProviderSourcePathPricePermission';
  }
}

