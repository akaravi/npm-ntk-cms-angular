import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimContentModel } from '../../models/entity/core-main/coreUserClaimContentModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreUserClaimContentService extends ApiCmsServerBase<CoreUserClaimContentModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreUserClaimContent';
  }
}
