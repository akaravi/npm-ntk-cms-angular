
import { Injectable } from '@angular/core';
import { CoreTokenActivationModel } from '../../models/entity/core-token/coreTokenActivationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreTokenActivationService extends ApiCmsServerBase<CoreTokenActivationModel, string>  {  getModuleCotrolerUrl(): string {
    return 'CoreTokenActivation';
  }
}
