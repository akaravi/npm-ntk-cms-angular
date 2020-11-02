
import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreUserGroupService extends ApiCmsServerBase<any, number>  {
  
  getModuleCotrolerUrl(): string {
    return 'CoreUserGroup';
  }
}
