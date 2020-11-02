import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreModuleProcessCustomizeService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'CoreModuleProcessCustomize';
  }
}
