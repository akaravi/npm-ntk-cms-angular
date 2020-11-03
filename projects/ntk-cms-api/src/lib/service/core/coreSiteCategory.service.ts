import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreSiteCategoryService extends ApiCmsServerBase<any, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategory';
  }
}
