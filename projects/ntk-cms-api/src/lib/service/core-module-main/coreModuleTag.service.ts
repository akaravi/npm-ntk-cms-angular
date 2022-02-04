
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagModel } from '../../models/entity/core-module-main/coreModuleTagModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleTagService extends ApiCmsServerBase<CoreModuleTagModel, number>  {
    getModuleControllerUrl(): string {
      return 'CoreModuleTag';
    }
}
