import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


import { Injectable } from '@angular/core';
import { UniversalMenuSessionModel } from '../../models/entity/universal-menu/universalMenuSessionModel';


@Injectable()
export class UniversalMenuSessionService extends ApiCmsServerBase<UniversalMenuSessionModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'UniversalMenuSession';
  }


}
