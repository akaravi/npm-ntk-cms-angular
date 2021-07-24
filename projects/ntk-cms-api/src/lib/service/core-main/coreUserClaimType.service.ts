import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimTypeModel } from '../../models/entity/core-main/coreUserClaimTypeModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CoreUserClaimTypeService extends ApiCmsServerBase<CoreUserClaimTypeModel, number>  {  getModuleCotrolerUrl(): string {
    return 'CoreUserClaimType';
  }
}
