import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';


export class NewsShareReciverCategoryService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsShareReciverCategory';
  }
}
