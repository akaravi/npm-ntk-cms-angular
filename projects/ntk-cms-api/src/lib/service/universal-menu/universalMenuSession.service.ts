import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { UniversalMenuSessionModel } from '../../models/entity/universal-menu/universalMenuSessionModel';


@Injectable()
export class UniversalMenuSessionService extends ApiCmsServerBase<UniversalMenuSessionModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'UniversalMenuSession';
  }


}
