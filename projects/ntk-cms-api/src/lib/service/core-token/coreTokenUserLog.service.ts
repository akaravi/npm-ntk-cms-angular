
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserLogModel } from '../../models/entity/core-token/coreTokenUserLogModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreTokenUserLogService extends ApiCmsServerBase<CoreTokenUserLogModel, string>  {  getModuleCotrolerUrl(): string {
    return 'CoreTokenUserLog';
  }
}
