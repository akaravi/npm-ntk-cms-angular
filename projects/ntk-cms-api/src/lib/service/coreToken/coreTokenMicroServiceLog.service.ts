
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenMicroServiceLogModel } from '../../models/entity/coreToken/coreTokenMicroServiceLogModel';

export class CoreTokenMicroServiceLogService extends ApiCmsServerBase<CoreTokenMicroServiceLogModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenMicroServiceLog';
  }
}
