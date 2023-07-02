
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreTokenActivationModel } from '../../models/entity/core-token/coreTokenActivationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenActivationService extends ApiCmsServerBase<CoreTokenActivationModel, string,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreTokenActivation';
  }
}
