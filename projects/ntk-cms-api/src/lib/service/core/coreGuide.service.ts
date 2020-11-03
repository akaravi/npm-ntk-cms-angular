import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreGuideService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreGuide';
  }
}
