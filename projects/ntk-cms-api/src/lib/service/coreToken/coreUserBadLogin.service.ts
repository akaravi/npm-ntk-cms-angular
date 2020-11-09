
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserBadLoginModel } from '../../models/entity/coreToken/coreTokenUserBadLoginModel';

export class CoreTokenUserBadLoginService extends ApiCmsServerBase<CoreTokenUserBadLoginModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreTokenUserBadLogin';
  }
}
