import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreModuleProcessCustomizeService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleProcessCustomize';
  }
}
