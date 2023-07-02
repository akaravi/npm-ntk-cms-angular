import { CoreModuleProcessCustomizeModel } from '../../models/entity/core-main/_export';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleProcessCustomizeService extends ApiCmsServerBase<CoreModuleProcessCustomizeModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleProcessCustomize';
  }
}
