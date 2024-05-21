import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleProcessCustomizeModel } from '../../models/entity/core-main/_export';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreModuleProcessCustomizeService extends ApiCmsServerBase<CoreModuleProcessCustomizeModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleProcessCustomize';
  }
}
