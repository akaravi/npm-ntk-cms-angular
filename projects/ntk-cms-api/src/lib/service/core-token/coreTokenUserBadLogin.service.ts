
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserBadLoginModel } from '../../models/entity/core-token/coreTokenUserBadLoginModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreTokenUserBadLoginService extends ApiCmsServerBase<CoreTokenUserBadLoginModel, string>  {  getModuleCotrolerUrl(): string {
    return 'CoreTokenUserBadLogin';
  }
}
