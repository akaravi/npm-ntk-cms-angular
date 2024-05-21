import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserSupportAccessModel } from '../../models/entity/core-main/coreUserSupportAccessModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreUserSupportAccessService extends ApiCmsServerBase<CoreUserSupportAccessModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreUserSupportAccess';
  }

}
