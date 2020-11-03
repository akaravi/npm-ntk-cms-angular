import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class NewsContentParameterService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentParameter';
  }
}
