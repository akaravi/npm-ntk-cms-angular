import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class NewsShareReciverCategoryService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsShareReciverCategory';
  }
}
