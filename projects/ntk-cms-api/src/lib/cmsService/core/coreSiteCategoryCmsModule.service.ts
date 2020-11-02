import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreSiteCategoryCmsModuleService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
