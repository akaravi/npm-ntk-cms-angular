
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserGroupModel } from '../../models/entity/core-main/coreUserGroupModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreUserGroupService extends ApiCmsServerBase<CoreUserGroupModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreUserGroup';
    }
}
