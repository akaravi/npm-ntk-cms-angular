
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserBadLoginModel } from '../../models/entity/core-token/coreTokenUserBadLoginModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class CoreTokenUserBadLoginService extends ApiCmsServerBase<CoreTokenUserBadLoginModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreTokenUserBadLogin';
  }
}
