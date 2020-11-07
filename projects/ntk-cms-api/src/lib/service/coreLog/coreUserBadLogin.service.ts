
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreTokenUserBadLoginModel } from '../../models/entity/coreToken/coreTokenUserBadLoginModel';

export class CoreUserBadLoginService extends ApiCmsServerBase<CoreTokenUserBadLoginModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreUserBadLogin';
  }
}
