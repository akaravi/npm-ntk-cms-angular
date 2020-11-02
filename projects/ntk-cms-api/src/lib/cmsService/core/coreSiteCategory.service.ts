import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreSiteCategoryService extends ApiCmsServerBase<any, number>  {
  
  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategory';
  }
}
