
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagModel } from '../../models/entity/coreModuleMain/coreModuleTagModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleTagService extends ApiCmsServerBase<CoreModuleTagModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleTag';
  }
}
