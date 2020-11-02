
import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreUserBadLoginService extends ApiCmsServerBase<any, number>  {
  
  getModuleCotrolerUrl(): string {
    return 'CoreUserBadLogin';
  }
}
