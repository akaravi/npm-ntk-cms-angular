import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserClaimGroupModel } from '../../models/entity/core-main/coreUserClaimGroupModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreUserClaimGroupService extends ApiCmsServerBase<CoreUserClaimGroupModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreUserClaimGroup';
    }
}
