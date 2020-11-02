import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class CoreGuideService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'CoreGuide';
  }
}
