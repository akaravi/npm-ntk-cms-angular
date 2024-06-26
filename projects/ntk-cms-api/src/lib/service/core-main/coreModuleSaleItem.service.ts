import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSaleItemModel } from '../../models/entity/core-main/coreModuleSaleItemModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleSaleItemService extends ApiCmsServerBase<CoreModuleSaleItemModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleItem';
  }
}
