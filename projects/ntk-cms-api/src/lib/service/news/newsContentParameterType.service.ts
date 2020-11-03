import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class NewsContentParameterTypeService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentParameterType';
  }
}
