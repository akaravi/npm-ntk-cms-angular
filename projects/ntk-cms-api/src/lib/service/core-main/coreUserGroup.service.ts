
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserGroupModel } from '../../models/entity/core-main/coreUserGroupModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreUserGroupService extends ApiCmsServerBase<CoreUserGroupModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreUserGroup';
  }
}
