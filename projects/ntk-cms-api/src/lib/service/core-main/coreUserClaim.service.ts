import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimModel } from '../../models/entity/core-main/coreUserClaimModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreUserClaimService extends ApiCmsServerBase<CoreUserClaimModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreUserClaim';
  }
}
