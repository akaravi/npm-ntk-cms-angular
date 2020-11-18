
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenLogModel } from '../../models/entity/coreToken/coreTokenLogModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreTokenLogService extends ApiCmsServerBase<CoreTokenLogModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenLog';
  }
}
