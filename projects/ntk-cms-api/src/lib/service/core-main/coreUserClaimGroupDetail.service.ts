import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserClaimGroupDetailModel } from '../../models/entity/core-main/coreUserClaimGroupDetailModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreUserClaimGroupDetailService extends ApiCmsServerBase<CoreUserClaimGroupDetailModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreUserClaimGroupDetail';
  }
}
