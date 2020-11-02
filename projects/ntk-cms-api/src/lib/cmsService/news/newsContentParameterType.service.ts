import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';


export class NewsContentParameterTypeService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsContentParameterType';
  }
}
