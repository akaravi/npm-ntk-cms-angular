
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLogTokenMicroServiceModel } from '../../models/entity/core-log/coreLogTokenMicroServiceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreLogTokenMicroServiceService extends ApiCmsServerBase<CoreLogTokenMicroServiceModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreLogTokenMicroService';
  }
}
