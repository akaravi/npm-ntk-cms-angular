
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagModel } from '../../models/entity/core-module-main/coreModuleTagModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreModuleTagService extends ApiCmsServerBase<CoreModuleTagModel, number,FilterModel>  {
    getModuleControllerUrl(): string {
      return 'CoreModuleTag';
    }
}
