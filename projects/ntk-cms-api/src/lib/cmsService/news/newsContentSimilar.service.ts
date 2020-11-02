import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { NewsContentSimilar } from '../../cmsModels/news/newsContentSimilar';


export class NewsContentSimilarService extends ApiCmsServerBase<NewsContentSimilar, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsContentSimilar';
  }
}
