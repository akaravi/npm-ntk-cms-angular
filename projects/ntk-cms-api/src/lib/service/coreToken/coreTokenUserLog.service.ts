
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserLogModel } from '../../models/entity/coreToken/coreTokenUserLogModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreTokenUserLogService extends ApiCmsServerBase<CoreTokenUserLogModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenUserLog';
  }
}
