
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserBadLoginModel } from '../../models/entity/coreToken/coreTokenUserBadLoginModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreTokenUserBadLoginService extends ApiCmsServerBase<CoreTokenUserBadLoginModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenUserBadLogin';
  }
}
