import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSaleHeaderGroupModel } from '../../models/entity/core-main/coreModuleSaleHeaderGroupModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleSaleHeaderGroupService extends ApiCmsServerBase<CoreModuleSaleHeaderGroupModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleHeaderGroup';
  }
}
