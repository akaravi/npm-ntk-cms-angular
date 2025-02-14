
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLogTokenUserModel } from '../../models/entity/core-log/coreLogTokenUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreLogTokenUserService extends ApiCmsServerBase<CoreLogTokenUserModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreLogTokenUser';
    }
}
