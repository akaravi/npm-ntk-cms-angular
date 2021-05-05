import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimGroupDetailModel } from '../../models/entity/core-main/coreUserClaimGroupDetailModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreUserClaimGroupDetailService extends ApiCmsServerBase<CoreUserClaimGroupDetailModel, number>  {  getModuleCotrolerUrl(): string {
    return 'CoreUserClaimGroupDetail';
  }
}
