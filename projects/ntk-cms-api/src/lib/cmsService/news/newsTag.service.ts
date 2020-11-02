import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { NewsTagModel } from '../../cmsModels/news/newsTagModel';


export class NewsTagService extends ApiCmsServerBase<NewsTagModel, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsTag';
  }
}
