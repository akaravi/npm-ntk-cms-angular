import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimGroupDetailModel } from '../../models/entity/core-main/coreUserClaimGroupDetailModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreUserClaimGroupDetailService extends ApiCmsServerBase<CoreUserClaimGroupDetailModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreUserClaimGroupDetail';
  }
}
