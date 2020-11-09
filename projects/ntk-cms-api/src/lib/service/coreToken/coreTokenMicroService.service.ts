
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenMicroServiceModel } from '../../models/entity/coreToken/coreTokenMicroServiceModel';

export class CoreTokenMicroServiceService extends ApiCmsServerBase<CoreTokenMicroServiceModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenMicroService';
  }
}
