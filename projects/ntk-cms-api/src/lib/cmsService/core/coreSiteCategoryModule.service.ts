import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreSiteCategoryModuleService extends ApiCmsServerBase<any, number>  {
  
  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
