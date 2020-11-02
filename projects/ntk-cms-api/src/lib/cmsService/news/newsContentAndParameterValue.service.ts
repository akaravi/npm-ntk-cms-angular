import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';


export class NewsContentAndParameterValueService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsContentAndParameterValue';
  }
}
