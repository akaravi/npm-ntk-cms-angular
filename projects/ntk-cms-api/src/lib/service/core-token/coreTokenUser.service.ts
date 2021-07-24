
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserModel } from '../../models/entity/core-token/coreTokenUserModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreTokenUserService extends ApiCmsServerBase<CoreTokenUserModel, string>  {  getModuleCotrolerUrl(): string {
    return 'CoreTokenUser';
  }
}
