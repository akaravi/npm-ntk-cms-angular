
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenUserModel } from '../../models/entity/core-token/coreTokenUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenUserService extends ApiCmsServerBase<CoreTokenUserModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreTokenUser';
    }
}
