import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimGroupModel } from '../../models/entity/core-main/coreUserClaimGroupModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CoreUserClaimGroupService extends ApiCmsServerBase<CoreUserClaimGroupModel, number>  {  getModuleCotrolerUrl(): string {
    return 'CoreUserClaimGroup';
  }
}
