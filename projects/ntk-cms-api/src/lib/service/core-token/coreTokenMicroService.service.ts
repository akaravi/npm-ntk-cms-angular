
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenMicroServiceModel } from '../../models/entity/core-token/coreTokenMicroServiceModel';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreTokenMicroServiceService extends ApiCmsServerBase<CoreTokenMicroServiceModel, string>  {  getModuleControllerUrl(): string {
    return 'CoreTokenMicroService';
  }
}
