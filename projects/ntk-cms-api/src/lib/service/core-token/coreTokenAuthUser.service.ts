
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenAuthUserModel } from '../../models/entity/core-token/coreTokenAuthUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenAuthUserService extends ApiCmsServerBase<CoreTokenAuthUserModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreTokenAuthUser';
    }
}
