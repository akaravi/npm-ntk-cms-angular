import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreSiteCategoryModuleService extends ApiCmsServerBase<any, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
