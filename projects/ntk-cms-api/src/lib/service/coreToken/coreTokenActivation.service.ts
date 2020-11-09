
import { CoreTokenActivationModel } from '../../models/entity/coreToken/coreTokenActivationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class CoreTokenActivationService extends ApiCmsServerBase<CoreTokenActivationModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenActivation';
  }
}
