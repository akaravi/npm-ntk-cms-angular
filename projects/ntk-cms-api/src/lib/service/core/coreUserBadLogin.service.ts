
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreUserBadLoginService extends ApiCmsServerBase<any, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreUserBadLogin';
  }
}
