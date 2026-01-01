import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderClientPermissionModel } from '../../models/entity/data-provider/dataProviderClientPermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderClientPermissionService extends ApiCmsServerBase<
  DataProviderClientPermissionModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'DataProviderClientPermission';
  }
}

