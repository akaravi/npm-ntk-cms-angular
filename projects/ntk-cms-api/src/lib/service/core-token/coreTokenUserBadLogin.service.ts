
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenUserBadLoginModel } from '../../models/entity/core-token/coreTokenUserBadLoginModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenUserBadLoginService extends ApiCmsServerBase<CoreTokenUserBadLoginModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreTokenUserBadLogin';
    }
}
