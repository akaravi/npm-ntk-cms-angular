
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreUserGroupService extends ApiCmsServerBase<any, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreUserGroup';
  }
}
