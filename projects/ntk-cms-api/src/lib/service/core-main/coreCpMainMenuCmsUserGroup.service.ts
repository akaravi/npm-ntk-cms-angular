import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCpMainMenuCmsUserGroupModel } from '../../models/entity/core-main/coreCpMainMenuCmsUserGroupModel';


@Injectable()
export class CoreCpMainMenuCmsUserGroupService extends ApiCmsServerBase<CoreCpMainMenuCmsUserGroupModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreCpMainMenuCmsUserGroup';
  }
}
