
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenMicroServiceModel } from '../../models/entity/core-token/coreTokenMicroServiceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenMicroServiceService extends ApiCmsServerBase<CoreTokenMicroServiceModel, string, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreTokenMicroService';
    }
}
