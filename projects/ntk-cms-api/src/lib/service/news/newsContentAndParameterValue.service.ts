import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class NewsContentAndParameterValueService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentAndParameterValue';
  }
}
