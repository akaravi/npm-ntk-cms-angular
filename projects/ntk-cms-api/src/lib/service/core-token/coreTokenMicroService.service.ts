
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenMicroServiceModel } from '../../models/entity/core-token/coreTokenMicroServiceModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class CoreTokenMicroServiceService extends ApiCmsServerBase<CoreTokenMicroServiceModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreTokenMicroService';
  }
}
