
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserModel } from '../../models/entity/coreToken/coreTokenUserModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreTokenUserService extends ApiCmsServerBase<CoreTokenUserModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenUser';
  }
}
