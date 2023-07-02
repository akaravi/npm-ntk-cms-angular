
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserModel } from '../../models/entity/core-token/coreTokenUserModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class CoreTokenUserService extends ApiCmsServerBase<CoreTokenUserModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreTokenUser';
  }
}
