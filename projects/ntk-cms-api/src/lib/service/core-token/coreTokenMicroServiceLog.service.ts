
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenMicroServiceLogModel } from '../../models/entity/core-token/coreTokenMicroServiceLogModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreTokenMicroServiceLogService extends ApiCmsServerBase<CoreTokenMicroServiceLogModel, string>  {
   getModuleCotrolerUrl(): string {
    return 'CoreTokenMicroServiceLog';
  }
}
