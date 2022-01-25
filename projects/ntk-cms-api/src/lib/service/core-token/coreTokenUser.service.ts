
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserModel } from '../../models/entity/core-token/coreTokenUserModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreTokenUserService extends ApiCmsServerBase<CoreTokenUserModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreTokenUser';
  }
}
